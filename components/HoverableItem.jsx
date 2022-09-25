import React, { useState } from "react";
import styles from "../styles/Home.module.css";

export default function HoverSlide({ children }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ position: "relative" }}
        >
            <div className={styles.swiperImage}>{children}</div>
        </div>
    );
}
