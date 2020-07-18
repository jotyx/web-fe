const localize = (language, string) => {
    if (language === "en" && enLocalization[string]) {
        return enLocalization[string];
    }
    if (language === "cz" && czLocalization[string]) {
        return czLocalization[string];
    }
    return "";
};

const enLocalization = {
    mainTitle: "Web Development",
    description: "Development of a modern, responsive static web sites.",
    requestOffer: "Request an Offer",
};

const czLocalization = {
    mainTitle: "Tvorba Webových stránek",
    description: "Vývoj moderních, responzivních statických webů.",
    requestOffer: "Vyžádat ponuku",
};

export default localize;
