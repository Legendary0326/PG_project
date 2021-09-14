import React from "react";
import { Link } from "react-router-dom";
import ButtonOutlined from "../button/button-outlined/ButtonOutlined";
import SocialLinks from "../social-links/SocialLinks";
const Sidebar = ({ active }) => {
    const links = [
        { title: "Dashboard", path: "/dashboard", id: "dash" },
        { title: "Inventory", path: "/inventory", id: "inv" },
        { title: "Coming Soon", path: "/comingsoon", id: "comingsoon" },
    ];

    return (
        <aside className="w-64 flex flex-col h-full">
            <div className="space-y-5 p-6 border-r border-white">
                {links.map((link) => (
                    <Link to={link.path} className="block">
                        <ButtonOutlined
                            active={active === link.id ? true : false}
                        >
                            {link.title}
                        </ButtonOutlined>
                    </Link>
                ))}
            </div>
            <div className="flex-grow border-r mb-8"></div>
            <SocialLinks />
        </aside>
    );
};

export default Sidebar;
