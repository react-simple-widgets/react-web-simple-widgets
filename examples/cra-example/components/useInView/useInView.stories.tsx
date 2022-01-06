import * as React from "react";
import { storiesOf } from "@storybook/react";
import useInView from "react-web-simple-widgets/widgets/hooks/useInView";

const DefaultExample = (props) => {

    const [ ref, isVisible ] = useInView({
        threshold: 1,
    });
    const [ ref2, isVisible2 ] = useInView({
        threshold: 1,
        // rootMargin: "20px 0px 0px 0px",
        defaultInView: true,
    });

    return (
        <>
            <div
                ref={ref2}
                style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "orange",
                    position: "absolute",
                    top: "50px",
                    pointerEvents: "none",
                }}
            >
            </div>
            <div
                style={{
                    width: "100%",
                    height: "64px",
                    position: "sticky",
                    top: "0px",
                }}
            >
                {isVisible ? 'IN ' : 'OUT '}{isVisible2 ? "no scroll" : "has scroll"}
            </div>
            <div
                style={{
                    width: "100%",
                    height: "350px",
                }}
            >
                Spacing
            </div>
            <div
                ref={ref}
                style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "orange",
                }}
            >
            </div>
            <div
                style={{
                    width: "100%",
                    height: "450px",
                }}
            >
                Spacing
            </div>
        </>
    );
};

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("hooks/useInView", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
