import React from "react";
import discordLogo from "../../assets/icons/discord.svg";
import mediumLogo from "../../assets/icons/medium.svg";
import substackLogo from "../../assets/icons/substack.svg";
import twitterLogo from "../../assets/icons/twitter.svg";

const SocialLinks = () => {
    return (
        <div className="flex justify-center relative z-10">
            <div className="bg-gradient-to-br from-blue-700 to-red-700 rounded-full p-0.5">
                <ul className="text-white flex gap-8 rounded-full px-12 py-4 bg-black">
                    <li>
                        <a href="https://discord.gg/AWSVhfkVXG">
                            <img src={discordLogo} alt="" />
                        </a>
                    </li>

                    <li>
                        <a href="https://twitter.com/yieldguild">
                            <img src={twitterLogo} alt="" />
                        </a>
                    </li>

                    <li>
                        <a href="https://medium.com/@yieldguild">
                            <img src={mediumLogo} alt="" />
                        </a>
                    </li>

                    <li>
                        <a href="https://yieldguild.substack.com/">
                            <img src={substackLogo} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SocialLinks;
