import * as React from "react";
import styled from "styled-components";
import ChevronLeftIcon from "@mdi/svg/svg/chevron-left.svg";

const LeftArrowWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: inline-flex;
  z-index: 1;
  align-items: center;
`;

const LeftArrowButton = styled.button`
  background-color: ${({ disabled }) =>
        disabled ? "transparent" : "transparent"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: #ffffff;
  border: none;
`;

type Props = {
    onClick?: (evt?) => void,
    disabled?: boolean,
};

const LeftArrow = ({ onClick, disabled }: Props) => {
    const _handleClick = ev => {
        ev.stopPropagation();
        onClick(ev);
    };

    return (
        <LeftArrowWrapper>
            <LeftArrowButton
                onClick={_handleClick}
                disabled={disabled}
            >
                <ChevronLeftIcon size={24} />
            </LeftArrowButton>
        </LeftArrowWrapper>
    );
};

export default LeftArrow;
