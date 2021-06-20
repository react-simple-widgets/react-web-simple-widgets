import * as React from "react";
import classNames from "classnames";
import ClickableComponent from "../ClickableComponent";
import Popup from "./Popup";

type Props = {
    inline?: boolean,
    onClick: (event) => void,
    onFocus?: (event) => void,
    onBlur?: (event) => void,
    className?: string,
    children?: React.ReactNode,
};

const defaultProps = {
    inline: true
};

export default function PopupButton(props: Props) {
    const { inline, className } = props;
    const ps = { ...props };
    delete ps.children;
    delete ps.inline;
    delete ps.className;

    return (
        <ClickableComponent
            className={classNames(
                className,
                {
                    "video-react-menu-button-inline": !!inline,
                    "video-react-menu-button-popup": !inline
                },
                "video-react-control video-react-button video-react-menu-button"
            )}
            {...ps}
        >
            <Popup {...props} />
        </ClickableComponent>
    );
}

PopupButton.defaultProps = defaultProps;
PopupButton.displayName = "PopupButton";
