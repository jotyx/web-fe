import React from "react";
import PropTypes from "prop-types";

import style from "./CenterLayout.module.scss";

export const CenterLayout = ({children}) => (
    <div className={style.root}>
        {children}
    </div>
);

CenterLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
