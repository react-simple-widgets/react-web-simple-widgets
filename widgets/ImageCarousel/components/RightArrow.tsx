import * as React from "react";
import styled from "styled-components";
import ChevronRightIcon from "@mdi/svg/svg/chevron-right.svg";
import SvgIcon from "../../SvgIcon";

const RightArrowWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: inline-flex;
  z-index: 1;
  align-items: center;
`;

const RightArrowButton = styled.button`
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

const RightArrow = ({ onClick, disabled }: Props) => {
    const _handleClick = ev => {
        ev.stopPropagation();
        onClick(ev);
    };

    return (
        <RightArrowWrapper>
            <RightArrowButton
                onClick={_handleClick}
                disabled={disabled}
            >
                <SvgIcon icon={ChevronRightIcon} />
            </RightArrowButton>
        </RightArrowWrapper>
    );
};

export default RightArrow;
