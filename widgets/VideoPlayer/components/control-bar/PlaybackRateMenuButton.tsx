import * as React from "react";
import classNames from "classnames";
import MenuButton from "../menu/MenuButton";

type Props = {
    player?: Record<string, any>,
    actions?: Record<string, any>,
    rates?: number[],
    className?: string,
    order?: number,
};

const defaultProps = {
    rates: [2, 1.5, 1.25, 1, 0.5, 0.25]
};

class PlaybackRateMenuButton extends React.Component<Props> {

    static defaultProps = defaultProps;
    static displayName = "PlaybackRateMenuButton";

    constructor(props, context) {
        super(props, context);

        this.handleSelectItem = this.handleSelectItem.bind(this);
    }

    handleSelectItem(index) {
        const { rates, actions } = this.props;
        if (index >= 0 && index < rates.length) {
            actions.changeRate(rates[index]);
        }
    }

    render() {
        const { rates, player } = this.props;
        const items = rates.map(rate => ({
            label: `${rate}x`,
            value: rate
        }));
        const selectedIndex = rates.indexOf(player.playbackRate) || 0;

        return (
            <MenuButton
                className={classNames(
                    "video-react-playback-rate",
                    this.props.className
                )}
                onSelectItem={this.handleSelectItem}
                items={items}
                selectedIndex={selectedIndex}
            >
                <span className="video-react-control-text">Playback Rate</span>
                <div className="video-react-playback-rate-value">
                    {`${player.playbackRate.toFixed(2)}x`}
                </div>
            </MenuButton>
        );
    }
}

export default PlaybackRateMenuButton;
