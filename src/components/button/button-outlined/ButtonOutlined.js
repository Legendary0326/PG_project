import React from "react";

const ButtonOutlined = (props) => {
    const rounded = props.rounded || "rounded-full";
    const active = props.active === undefined ? true : props.active;
    const activeClass = active ? "bg-gradient-to-br p-0.5" : "p-0 border-1";

    return (
        <button
            className={` from-yellow-100 to-yellow-700 w-full  ${activeClass} ${rounded}`}
        >
            <p
                className={`font-bold text-lg bg-black p-2 hover:bg-gray-800 ${rounded}`}
            >
                {props.children}
            </p>
        </button>
    );
};

export default ButtonOutlined;
