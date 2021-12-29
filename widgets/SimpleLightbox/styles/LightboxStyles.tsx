import styled from "styled-components";
import { motion } from "framer-motion";

type StyledLightboxProps = {
    overlayColor?: string,
};
// Main DIV containing the entire light-box
export const StyledLightbox = styled(motion.div)<StyledLightboxProps>`
  background-color: ${(props) => props.overlayColor};
  position: fixed;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  top: 0;
  left: 0;
  z-index: 9999;
`;
