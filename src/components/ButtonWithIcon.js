import React from "react";
import PropTypes from "prop-types";

import style from "./ButtonWithIcon.module.scss";
import {Icon} from "./Icon";

export const ButtonWithIcon = ({label, onClick, icon}) => (
    <div onClick={onClick} className={style.root}>
        {label && (
            <span className={style.buttonText}>
                {label}
            </span>
        )}
        <div className={style.icon}>
            <Icon name={icon} size={15} />
        </div>
    </div>
);

ButtonWithIcon.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
};

ButtonWithIcon.defaultProps = {
    label: undefined,
};
