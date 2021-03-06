import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logoShield from "../../assets/shield_.png";

import logoShieldShadow from "../../assets/logo_shield_shadow.png";
import SocialLinks from "../social-links/SocialLinks";
import background from "../../assets/background.png";
import {
    connectWallet,
    getCurrentWalletConnected,
    getBalanceOf,
} from "../../util/interact.js";

const Hero = ({ setModal, walletAddress, setWallet, status, setStatus, balance, setBalance }) => {

    useEffect(async () => {
        const { address, status } = await getCurrentWalletConnected();
        let balance = false;
        if (address)
            balance = await getBalanceOf();
        console.log("balance", balance);
        setBalance(balance);
        setWallet(address);
        setStatus(status);

        addWalletListener();
    }, []);

    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setWallet(accounts[0]);
                    setStatus("👆🏽 Write a message in the text-field above.");
                } else {
                    setWallet("");
                    setStatus("🦊 Connect to Metamask using the top right button.");
                }
            });
        } else {
            setStatus(
                <p>
                    {" "}
              🦊{" "}
                    <a target="_blank" href={`https://metamask.io/download.html`}>
                        You must install Metamask, a virtual Ethereum wallet, in your
                        browser.
              </a>
                </p>
            );
        }
    }

    return (
        <>
            <main className="bg-black h-full w-full z-0 text-white relative flex flex-col justify-center items-center">
                <div className="p-4 flex-grow flex flex-col justify-center 2xl:container mx-auto relative overflow-hidden w-full">
                    <div className=" flex items-center">
                        <div className="w-full lg:pl-24 relative z-10">
                            <div className="flex items-center space-x-4 relative z-10 justify-center lg:justify-start">
                                <div className="lg:block w-60 hidden">
                                    <img src={logoShield} alt="" />
                                </div>
                                <div className="content">
                                    <h2 className="text-red-300 lg:font-extrabold lg:text-3xl font-bold">
                                        PG IS A PLAY-TO-EARN GAMING GUILD
                                    </h2>
                                    <p className="mt-4 w-96 lg:font-extrabold lg:text-lg font-bold text-gray-300">
                                        PG IS A PLAY-TO-EARN GAMING GUILD,
                                        BRINGING PLAYERS TOGETHER TO EARN VIA
                                        BLOCKCHAIN-BASED ECONOMIES. WE ARE THE
                                        SETTLERS OF NEW WORLDS IN THE METAVERSE
                                    </p>
                                </div>
                            </div>

                            <div className="text-center lg:text-left">
                                {(walletAddress.length <= 0) && (
                                    <button
                                        className="mt-8 bg-blue-600 text-white font-extrabold text-xl px-12 py-6 rounded-full uppercase relative z-10 bg-gradient-to-br from-yellow-200 to-yellow-700"
                                        onClick={() => setModal(true)}
                                    >
                                        <span className="animate-pulse">Connect Your Wallet To Start</span>
                                    </button>
                                )
                                }
                                {(walletAddress.length > 0 && balance > 0) && (
                                    <Link to="/dashboard">
                                        <button
                                            className="mt-8 bg-blue-600 text-white font-extrabold px-12 py-6 rounded-full uppercase relative z-10 bg-gradient-to-br from-yellow-200 to-yellow-700"
                                        >
                                            <span className="animate-pulse">Continue your wallet to start</span>
                                        </button>
                                    </Link>
                                )
                                }
                                {(walletAddress.length > 0 && balance == 0) && (
                                    <Link to="/mint">
                                        <button
                                            className="mt-8 bg-blue-600 text-white font-extrabold px-12 py-6 rounded-full uppercase relative z-10 bg-gradient-to-br from-yellow-200 to-yellow-700"
                                        >
                                            <span className="animate-pulse">Start your Adventure</span>
                                        </button>
                                    </Link>
                                )
                                }
                            </div>

                            {/* <div className="absolute top-0 left-0 z-0 lg:block hidden ">
                                <img
                                    src={logoShieldShadow}
                                    alt=""
                                    className="relative -left-2 bottom-12"
                                />
                            </div> */}

                        </div>
                    </div>

                    {/* for desktop */}
                    <div
                        className="p-4 hidden lg:flex lg:absolute right-6 z-0 lg:max-w-3xl items-start justify-center w-96" style={{transform: "scale(1.1)"}}>
                        <img
                            src={logoShield}
                            alt=""
                            className="w-full"
                        />
                    </div>
                    {/* for mobile */}
                    <div className="lg:hidden flex items-start justify-center">
                        <img
                            src={logoShield}
                            alt=""
                            className="relative w-2/4 mt-8 lg:w-auto lg:mt-0"
                        />
                    </div>
                </div>

                <div className="mb-8">
                    <SocialLinks />
                </div>
            </main>
        </>
    );
};

export default Hero;
