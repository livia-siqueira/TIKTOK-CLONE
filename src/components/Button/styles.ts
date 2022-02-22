import styled from "styled-components";

export const Button = styled.button<{ fontSize: number; outlined?: boolean }>`
  width: 90%;
  font-size: ${({ fontSize }) =>
    fontSize !== null ? `${fontSize}px` : "10px"};
  font-weight: 700;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  background: ${({ outlined, theme }) =>
    outlined ? "#fff" : theme.colors.primary};
  border: ${({ outlined, theme }) =>
    outlined ? `1px solid ${theme.colors.primary}` : "none"};
  color: ${({ outlined, theme }) => (outlined ? theme.colors.primary : "#fff")};
  cursor: pointer;
  :hover {
    background-color: ${({ outlined, theme }) =>
      outlined ? "rgba(22,24,35,0.03)" : theme.colors.primary};
  }
`;
