import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ mobile }) {
    return (
        <Link href={"/"}>
            <div className="footer-logo-mobile"
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 0",
                    paddingLeft: mobile ? 10 : 0,
                }}>
                <Image
                    src={"/logo.png"}
                    alt="Lotus Arhitect address"
                    width={65}
                    height={65}
                />
            </div>
        </Link>
    );
}
