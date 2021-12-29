import * as React from "react";
import { useInterval } from "../../../../hooks";
import {
    StyledProgressBar,
    StyledProgressBarWrapper
} from "../../../../styles/ProgressBarStyles";


type ProgressBarProps = {
    backgroundColor?: string,
    fillColor?: string,
    height?: string
};
type Props = {
    autoplay?: boolean,
    autoplaySpeed?: number,
    currentElementID?: string,
    progressBar?: ProgressBarProps
};

const ProgressBarComponent = ({
    autoplay,
    autoplaySpeed,
    progressBar,
    currentElementID
}: Props) => {
    const [isPlaying, setIsPlaying] = React.useState(false);

    // Call of the interval to fill the progress bar
    function fillProgressBar() {
        setIsPlaying(true);
    }

    React.useEffect(() => {
        setIsPlaying(false);
    }, [currentElementID]);

    // Use interval hook
    useInterval(
        () => fillProgressBar(),
        autoplay ? autoplaySpeed / 100 : null,
        currentElementID
    );

    return (
        <StyledProgressBarWrapper
            barHeight={progressBar.height}
            backgroundColor={progressBar.backgroundColor}
            className="SRLProgressBar"
        >
            <StyledProgressBar
                barHeight={progressBar.height}
                fillColor={progressBar.fillColor}
                style={{
                    transform: `scaleX(${isPlaying ? 1 : 0})`,
                    transitionDuration: `${isPlaying ? autoplaySpeed + "ms" : "0ms"}`
                }}
            />
        </StyledProgressBarWrapper>
    );
};

export default ProgressBarComponent;
