import styled from "styled-components";

interface ButtonProps {
  inverted?: boolean;
  noBorder?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({ inverted }: ButtonProps) =>
    inverted ? "linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%)" : "#000"};
  color: ${({ inverted }: ButtonProps) => (inverted ? "#000" : "#fff")};
  border-radius: 50px;

  border: ${({ noBorder }: ButtonProps) =>
    noBorder ? "none" : "1px solid #fff"};
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ inverted }: ButtonProps) =>
      inverted ? "#000" : "#fff"};
    color: ${({ inverted }: ButtonProps) => (inverted ? "#fff" : "#000")};
  }
`;
