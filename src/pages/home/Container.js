import React, {useState} from "react";

import {
    MarginLayout,
    VerticalSpace,
    Text,
    Seo,
    CenterLayout,
    ButtonBig,
    ButtonWithIcon,
} from "components";

import localize from "../localization";

const linkToEmail = () => {
    window.location.href = "mailto:skurla.business@gmail.com";
};

const Container = () => {
    const [language, setLanguage] = useState("en");

    const setProperLanguage = () => (language === "en" ? setLanguage("cz") : setLanguage("en"));

    return (
        <>
            <Seo title="Web Development" />

            <div style={{
                position: "absolute",
                right: "10px",
                top: "10px",
            }}
            >
                <ButtonWithIcon icon={language === "en" ? "flag-czechia" : "flag-en"} onClick={setProperLanguage} />
            </div>

            <CenterLayout>
                <MarginLayout>
                    <Text value={localize(language, "mainTitle")} fontSize={Text.SIZE.SIZE_36} paragraphs color="#ffffff" />

                    <Text
                        value={localize(language, "description")}
                        fontSize={Text.SIZE.SIZE_24}
                        paragraphs
                        color="#cacaca"
                    />
                </MarginLayout>
                <MarginLayout>
                    <ButtonBig label={localize(language, "requestOffer")} onClick={linkToEmail} />
                    <VerticalSpace />
                </MarginLayout>
            </CenterLayout>
        </>
    );
};

export default Container;
