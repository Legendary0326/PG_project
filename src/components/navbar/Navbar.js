import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Modal from "../modal/Modal";
import Hamburger from "hamburger-react";
import {
    connectWallet,
    getCurrentWalletConnected,
    mintNFT,
    disconnect
} from "../../util/interact.js";

const Navbar = ({ isModalOpen, setModal, walletAddress, setWallet, status, setStatus, balance }) => {
    const [openHam, setOpenHam] = useState(false);
    const hamClass = openHam ? "" : "hidden";
    return (
        <>
            <nav className="bg-black text-white lg:p-4 p-2 relative z-10">
                <div className="2xl:container mx-auto flex flex-wrap lg:gap-8 items-center">
                    <div className="lg:hidden">
                        <Hamburger toggled={openHam} toggle={setOpenHam} />
                    </div>
                    <div className="lg:hidden flex-grow"></div>
                    <div className="logo">
                        <a href="/">
                            <img src={logo} alt="Website Logo" />
                        </a>
                    </div>

                    <div className="flex-grow"></div>
                    <div
                        className={`lg:block lg:w-auto lg:h-auto ${hamClass} lg:mt-auto lg:flex gap-4
                         mt-4 w-full h-screen transition duration-300 text-center bg-black`}
                    >
                        <a
                            className="text-white font-extrabold px-10 py-4 rounded-full uppercase bg-gradient-to-br from-yellow-200 to-yellow-700 mr-2"
                            href="https://yieldguild.io/YGG-Whitepaper-English.pdf"
                            target="blank"
                        >
                            White Paper
                        </a>
                        {walletAddress.length > 0 ? (
                            <button
                                className="bg-blue-600 text-white font-extrabold px-10  py-4 rounded-full uppercase bg-gradient-to-br from-yellow-200 to-yellow-700
                        "
                            >
                                {String(walletAddress).substring(0, 6) +
                                    "..." +
                                    String(walletAddress).substring(38)}
                            </button>
                        ) : (
                                <button
                                    className="bg-blue-600 text-white font-extrabold px-10  py-4 rounded-full uppercase
                        bg-gradient-to-br from-yellow-200 to-yellow-700
                        "
                                    onClick={() => setModal(true)}
                                >
                                    <span>Connect Wallet</span>
                                </button>
                            )}
                    </div>
                </div>
            </nav>

            <Modal open={isModalOpen} closeModal={() => setModal(false)} walletAddress={walletAddress} setWallet={setWallet} status={status} setStatus={setStatus} />
        </>
    );
};

export default Navbar;
