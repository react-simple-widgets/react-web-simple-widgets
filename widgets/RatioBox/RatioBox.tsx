import * as React from "react";
import styled from "styled-components/native";
import { compose, layout, LayoutProps, position, PositionProps, space, SpaceProps } from "styled-system";

const StyledBox = styled.View<LayoutProps & SpaceProps & PositionProps>(compose(
    layout,
    space,
    position,
));
StyledBox.defaultProps = {
    position: "relative",
    width: "100%",
};

const StyledBoxHolder = styled.View<LayoutProps & SpaceProps & PositionProps>(compose(
    layout,
    space,
    position,
));
StyledBoxHolder.defaultProps = {
    width: "100%",
};

const StyledBoxConttent = styled.View<LayoutProps & SpaceProps & PositionProps>(compose(
    layout,
    space,
    position,
));
StyledBoxConttent.defaultProps = {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    top: "0",
    right: "0",
    left: "0",
};

const RatioBox = (props) => {

    const {
        children,
    } = props;

    return (
        <StyledBox
            testID="ratiobox"
            height={"auto"}
        >
            <StyledBoxHolder
                paddingTop="56.25%"
                testID="ratiobox_placeholder"
            />
            <StyledBoxConttent
                testID="ratiobox_content"
            >
                {children}
            </StyledBoxConttent>
        </StyledBox>
    );
};

export default RatioBox;
