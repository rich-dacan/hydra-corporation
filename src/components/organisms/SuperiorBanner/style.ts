import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

export const Left = styled.div`
  width: 100%;
  max-width: 470px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  > button {
    margin-top: 2rem;
  }
`;

export const CustomTitle = styled.h2`
  color: #fff;
  font-size: 46px;
  font-weight: 700;
  line-height: normal;

  > b {
    background: linear-gradient(92deg, #c0b7e8 -1.02%, #8176af 36.25%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
