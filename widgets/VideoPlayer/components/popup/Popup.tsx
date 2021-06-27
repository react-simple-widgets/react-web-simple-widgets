import * as React from "react";

type Props = {
    player?: Record<string, any>,
    children?: React.ReactNode,
};

export default class Popup extends React.Component<Props> {
    static displayName = "Popup";

    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
    // event.stopPropagation();
    }

    render() {
        const { children } = this.props;
        return (
            <div className="video-react-menu" onClick={this.handleClick}>
                <div className="video-react-menu-content">{children}</div>
            </div>
        );
    }
}
