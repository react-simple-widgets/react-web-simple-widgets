import styled from "styled-components";

const SliderWrapper = styled.div<| { padding?: string, margin?: string }>`
  height: 100%;
  position: relative;
  padding: ${props => props.padding || "0px 0px"};
  margin: ${props => props.margin || "0px 0px"};
`;
export default SliderWrapper;
