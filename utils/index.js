import translations from '../translations';

export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const translationToRoute = (route) => {
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