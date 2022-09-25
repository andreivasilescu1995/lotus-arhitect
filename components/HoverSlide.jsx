import React, { useState } from "react";

export default function HoverSlide({ children }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ position: "relative" }}
        >
            <div style={{ width: "100%", height: 500 }}>{children}</div>
            {/* {hovered && (
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        backgroundColor: "#ffd101",
                        opacity: 0.5,
                        width: "100%",
                        height: "100%",
                        fontSize: 20,
                        zIndex: 99999,
                        transition: "all 3 ease",
                    }}
                >
                    hovered!!
                </div>
            )} */}
        </div>
    );
}
