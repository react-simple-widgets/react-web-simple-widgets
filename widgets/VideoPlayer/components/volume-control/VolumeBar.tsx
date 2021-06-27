import * as React from "react";
import classNames from "classnames";

import Slider from "../Slider";
import VolumeLevel from "./VolumeLevel";

type Props = {
    actions?: Record<string, any>,
    player?: Record<string, any>,
    className?: string,
    onFocus?: (event) => void,
    onBlur?: (event) => void,
};

type State = {
    percentage?: string, 
}

class VolumeBar extends React.Component<Props, State> {

    static displayName = "VolumeBar";

    state: State = {
        percentage: "0%"
    };

    slider;

    constructor(props, context) {
        super(props, context);

        this.state = {
            percentage: "0%"
        };

        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handlePercentageChange = this.handlePercentageChange.bind(this);
        this.checkMuted = this.checkMuted.bind(this);
        this.getPercent = this.getPercent.bind(this);
        this.stepForward = this.stepForward.bind(this);
        this.stepBack = this.stepBack.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // do something
    }

    getPercent() {
        const { player } = this.props;
        if (player.muted) {
            return 0;
        }
        return player.volume;
    }

    checkMuted() {
        const { player, actions } = this.props;
        if (player.muted) {
            actions.mute(false);
        }
    }

    handleMouseMove(event) {
        const { actions } = this.props;
        this.checkMuted();
        const distance = this.slider.calculateDistance(event);
        actions.changeVolume(distance);
    }

    stepForward() {
        const { player, actions } = this.props;
        this.checkMuted();
        actions.changeVolume(player.volume + 0.1);
    }

    stepBack() {
        const { player, actions } = this.props;
        this.checkMuted();
        actions.changeVolume(player.volume - 0.1);
    }

    handleFocus(e) {
        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    }

    handleBlur(e) {
        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    }

    handlePercentageChange(percentage) {
        if (percentage !== this.state.percentage) {
            this.setState({
                percentage
            });
        }
    }

    handleClick(event) {
        event.stopPropagation();
    }

    render() {
        const { player, className } = this.props;

        const volume = (player.volume * 100).toFixed(2);
        return (
            <Slider
                ref={(c) => {
                    this.slider = c;
                }}
                label="volume level"
                valuenow={volume}
                valuetext={`${volume}%`}
                onMouseMove={this.handleMouseMove}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onClick={this.handleClick}
                sliderActive={this.handleFocus}
                sliderInactive={this.handleBlur}
                getPercent={this.getPercent}
                onPercentageChange={this.handlePercentageChange}
                stepForward={this.stepForward}
                stepBack={this.stepBack}
                {...this.props}
                className={classNames(
                    className,
                    "video-react-volume-bar video-react-slider-bar"
                )}
            >
                <VolumeLevel {...this.props} />
            </Slider>
        );
    }
}

export default VolumeBar;
