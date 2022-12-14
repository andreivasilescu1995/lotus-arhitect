import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ReactCountryFlag from "react-country-flag";

import Link from "next/link";
import { useRouter } from "next/router";
import { translations } from "../translations";
import { capitalize } from "../utils";
import { drawerWidth } from "../constants";
import Logo from "../components/Logo";

function Header(props) {
    const { window } = props;
    const { locale, pathname } = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [lang, setLang] = useState(locale);

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

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: "center", bgcolor: "#8f2530" }}
        >
            <Logo mobile />
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <Link href={translationToRoute(item)}>
                                {capitalize(item)}
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    const LanguageSelector = () => (
        <Select
            autoWidth
            disableUnderline
            value={lang}
            variant="standard"
            defaultValue="gb"
            IconComponent={null}
        >
            <MenuItem value="en" onClick={() => setLang("en")}>
                <Link href={pathname} locale={"en"}>
                    <ReactCountryFlag
                        style={{ fontSize: 40 }}
                        countryCode="us"
                        aria-label="United States"
                    />
                </Link>
            </MenuItem>
            <MenuItem value="ro" onClick={() => setLang("ro")}>
                <Link href={pathname} locale={"ro"}>
                    <ReactCountryFlag
                        style={{ fontSize: 40 }}
                        countryCode="ro"
                        aria-label="Romania"
                    />
                </Link>
            </MenuItem>
            <MenuItem value="tr" onClick={() => setLang("tr")}>
                <Link href={pathname} locale={"tr"}>
                    <ReactCountryFlag
                        style={{ fontSize: 40 }}
                        countryCode="tr"
                        aria-label="T??rkiye"
                    />
                </Link>
            </MenuItem>
        </Select>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                component="nav"
                position={pathname === "/" ? "absolute" : "relative"}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        <Logo />
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: "#fff" }}>
                                <Link href={translationToRoute(item)}>
                                    {item}
                                </Link>
                            </Button>
                        ))}
                        <LanguageSelector />
                    </Box>
                    <Box
                        flex={1}
                        justifyContent="flex-end"
                        sx={{ display: { xs: "flex", sm: "none" } }}
                    >
                        <LanguageSelector />
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                            bgcolor: "#8f2530",
                            color: "#fff",
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Header;
