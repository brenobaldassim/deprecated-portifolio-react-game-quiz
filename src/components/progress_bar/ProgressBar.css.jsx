import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background: transparent;
`;

export const ProgressBar = styled.div`
  width: ${({ progress }) => `${progress}%`};
  height: 10px;
  background: white;
`;
