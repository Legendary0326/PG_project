import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import badge from "../../assets/badge.gif";
import video from "../../assets/videos/01.webm"

const assetsURI = "https://ipfs.io/ipfs/QmPzTEXKmYnRj2WWsgvGzn3nhj7MEEhNR2gQAFyquEmF57";

const Inventory = () => {
    return (
        <div className="h-full text-white flex gap-4">
            <Sidebar active="inv" />
            <main className="flex-grow flex flex-col items-center justify-center space-y-6 max-w-screen-sm mx-auto filter backdrop-blur-sm">
                
                <div className="overflow-hidden rounded-3xl w-96 mx-auto">
                    <video src={assetsURI} autoPlay muted loop></video>
                    {/* <img src={badge} alt="" className="" /> */}
                </div>

                <h2 className="font-extrabold text-lg text-center">Badge# {assetsURI}</h2>
            </main>
        </div>
    );
};

export default Inventory;
