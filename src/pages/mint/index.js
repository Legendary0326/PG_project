import React from "react";
import badge from "../../assets/badge.gif";
import video from "../../assets/videos/01.webm";
import {
    connectWallet,
    getCurrentWalletConnected,
    mintNFT,
} from "../../util/interact.js";

const assetsURI = "https://ipfs.io/ipfs/QmPzTEXKmYnRj2WWsgvGzn3nhj7MEEhNR2gQAFyquEmF57";

const Mint = ({walletAddress, status, setStatus}) => {
    const onMintPressed = async () => {
        const { success, status } = await mintNFT(assetsURI, "PG", "PG NFT FOR YIELD GAME");
        setStatus(status);
        if (success) {
        //   setName("");
        //   setDescription("");
        //   setURL("");
        console.log("successfully mint!")
        }
    };

    return (
        <div className="text-white container mx-auto space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to bg-red-600 p-1 rounded-full max-w-md mx-auto">
                <h2 className="p-2 bg-black rounded-full font-bold text-lg text-center">
                    Mint Your Guild Badge
                </h2>
            </div>

            <div className="overflow-hidden rounded-3xl w-96 mx-auto">
                <video src={assetsURI} autoPlay muted loop className="filter grayscale"></video>
                {/* <img src="https://ipfs.io/ipfs/QmPzTEXKmYnRj2WWsgvGzn3nhj7MEEhNR2gQAFyquEmF57" alt="" className="filter grayscale"/> */}
            </div>

            <p className="font-bold text-lg text-center">
                The guild badge is your key to PG Metaverse
            </p>

            <div className="text-center">
                <button className="bg-gradient-to-br from-blue-600 to-red-500 py-2 px-6 rounded-full font-bold text-lg" onClick={onMintPressed}>Mint Badge</button>
            </div>
        </div>
    );
};

export default Mint;
