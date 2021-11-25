import styled from "styled-components";


const CardWrapper = styled.div<| { width: number }>`
  outline: none;
  width: ${({ width }) => `${width}%`};
  min-height: 1px;
  height: 100%;
  margin: 0;
  padding: 0;
  display: inline-block;
  vertical-align: top;
  white-space: normal;
`;

export default CardWrapper;
