import { useEffect, useState } from "react";
import metamask from "../../assets/icons/metamask.svg";
import walletconnect from "../../assets/icons/walletconnect.svg";
import {connectWallet} from "../../util/interact.js";

const Modal = ({
    open = false,
    closeModal = () => {
        console.log("closing");
    },
    walletAddress,
    setWallet,
    status,
    setStatus
}) => {
    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setWallet(walletResponse.address);
        closeModal();
    };

    return (
        <div>
            {open && (
                <>
                    <div className="outer bg-black absolute top-0 left-0 h-full w-full z-20 opacity-80"></div>

                    <div
                        className="absolute top-0 left-0 h-full w-full z-30 flex items-center justify-center"
                        onClick={() => closeModal()}
                    >
                        <div
                            className="inner max-w-screen-sm flex-grow  text-white  bg-gradient-to-br from-red-800 to-blue-600 p-1 opacity-100 rounded-3xl"
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            <div className="bg-black p-8 rounded-3xl">
                                <button className="p-6 border-2 rounded-full mb-2 text-xl font-extrabold w-72 mx-auto flex items-center justify-between"
                                onClick={() => connectWalletPressed()}
                                >
                                    MetaMask
                                    <span className="w-12 block">
                                        <img src={metamask} alt="" />
                                    </span>
                                </button>
                                <button className="p-6 border-2 rounded-full mb-2 text-xl font-extrabold w-72 mx-auto flex items-center justify-between">
                                    Wallet Connect
                                    <span className="w-12 block">
                                        <img src={walletconnect} alt="" />
                                    </span>
                                </button>
                                <p className="text-center mt-4">
                                    <a
                                        href="https://metamask.io/"
                                        className="font-bold underline"
                                    >
                                        Don't have a wallet?
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Modal;
