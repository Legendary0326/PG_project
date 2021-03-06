import React from "react";
import ButtonOutlined from "../../components/button/button-outlined/ButtonOutlined";
import Sidebar from "../../components/sidebar/Sidebar";
import Marquee from "react-fast-marquee";
import video from "../../assets/videos/article/article.mp4"

const Dashboard = ({ walletAddress, setWallet, balance }) => {
    if(balance == 0)
        window.location.href = "/";
    return (
        <div className="h-full text-white flex gap-4">
            <Sidebar active={"dash"}/>
            <main className="flex-grow flex flex-col items-center space-y-6 mt-6 max-w-screen-sm mx-auto">
                <Marquee gradient={ true } gradientColor={[0,0,0]} pauseOnHover className="font-bold my-6 text-lg">
                    Fetched data goes here. $200 $100 $30 $400 $500 $600 $700 $800 $900 $300 $300 $100 $700 $400 $300 $100 $800 $400 $300 $90  
                </Marquee>

                <ButtonOutlined>Featured Article</ButtonOutlined>

                <div className="rounded-2xl w-full border-2 flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-200 to-yellow-700 backdrop-blur bg-opacity-40">
                    <video src={video} controls loop className="w-full h-full"></video>
                </div>

                <div className="self-end">
                    <ButtonOutlined rounded="rounded">Read More</ButtonOutlined>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
