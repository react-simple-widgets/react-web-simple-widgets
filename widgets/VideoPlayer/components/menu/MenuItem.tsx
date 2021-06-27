import * as React from "react";
import classNames from "classnames";

type Props = {
    item?: Record<string, any>,
    index?: number,
    activateIndex?: number,
    onSelectItem?: (index) => void,
};

export default class MenuItem extends React.Component<Props> {

    static displayName = "MenuItem";

    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { index, onSelectItem } = this.props;
        onSelectItem(index);
    }

    render() {
        const { item, index, activateIndex } = this.props;
        return (
            <li
                className={classNames({
                    "video-react-menu-item": true,
                    "video-react-selected": index === activateIndex
                })}
                role="menuitem"
                onClick={this.handleClick}
            >
                {item.label}
                <span className="video-react-control-text" />
            </li>
        );
    }
}
