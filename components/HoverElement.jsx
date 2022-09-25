import React, { useState } from "react";
import classNames from "classnames";

export default function HoverElement({ project }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                className={classNames({
                    hovearable: true,
                    blur: hovered,
                })}
            >
                <img
                    src={`${project.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${project.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={project.title}
                    loading="lazy"
                />
            </div>
            {hovered && (
                <div className="hoverContainer">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            border: "2.5px solid #ffd101",
                        }}
                    >
                        <div className="hoverText title">{project?.title}</div>
                        <div className="hoverText subTitle">{project?.location}</div>
                    </div>
                </div>
            )}
        </div>
    );
}
