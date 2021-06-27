import * as React from "react";

type Props = {
    children?: React.ReactNode,
};

export default class Menu extends React.Component<Props> {

    static displayName = "Menu";

    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
    // event.stopPropagation();
    }

    render() {
        return (
            <div
                className="video-react-menu video-react-lock-showing"
                role="presentation"
                onClick={this.handleClick}
            >
                <ul className="video-react-menu-content">{this.props.children}</ul>
            </div>
        );
    }
}
