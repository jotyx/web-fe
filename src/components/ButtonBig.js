import React from "react";
import PropTypes from "prop-types";

import style from "./ButtonBig.module.scss";

export const ButtonBig = ({onClick, color, label}) => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div onClick={onClick} className={style.root} style={color && {background: color}}>
        {label}
    </div>
);

ButtonBig.propTypes = {
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string,
    label: PropTypes.string.isRequired,
};

ButtonBig.defaultProps = {
    color: "#F1F1F2",
};
