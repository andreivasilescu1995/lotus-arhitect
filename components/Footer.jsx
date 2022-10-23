import React from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import isMobile from "../hooks/isMobile";
import { translations } from "../translations";
import { capitalize } from "../utils";
import Logo from "../components/Logo";

export default function Footer() {
    const { pathname, locale } = useRouter();
    const isMob = isMobile();

    const navItems = [
        translations[locale].projects,
        translations[locale].contact,
        translations[locale].about,
    ];

    const translationToRoute = (route) => {
        let str;
        switch (route) {
            case translations[locale].projects:
                str = "/projects";
                break;
            case translations[locale].contact:
                str = "/contact";
                break;
            case translations[locale].about:
                str = "/about";
                break;
        }
        return str;
    };

    return (
        <footer
            className={classNames({
                "footer-distributed": true,
                "footer-fixed": !isMob && ["/contact"].includes(pathname),
            })}
        >
            <div className="footer-left">
                <Logo />
                <p className="footer-links">
                    {navItems.map((e, i) => (
                        <Link key={e} href={translationToRoute(e)}>
                            <a className={`link-${i + 1}`}>{capitalize(e)}</a>
                        </Link>
                    ))}
                </p>
            </div>
            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p>
                        <span>123 Constanta</span> Jud. Constanta
                    </p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p>+1.555.555.5555</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p>
                        <a href="mailto:support@company.com">
                            support@company.com
                        </a>
                    </p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>{capitalize(translations[locale].footerAbout)}</span>
                    {translations[locale].aboutShort}
                </p>
                <div className="footer-icons">
                    <a href="#">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-github"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
