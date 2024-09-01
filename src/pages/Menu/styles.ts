import styled from "styled-components";

interface IProps {
  isMobile: boolean;
}

export const Container = styled.div<IProps>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  max-width: 1500px;
  margin: auto;
  padding: ${({ isMobile }) => (isMobile ? "10px" : "100px")};
`;

export const MenuContent = styled.div<IProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ isMobile }) => (isMobile ? "center" : "flex-start")};
  gap: 20px;
`;
