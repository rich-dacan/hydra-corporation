import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    display: flex;
    align-items: center;
  }
`;

export const TopicList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  > li {
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    line-height: normal;
    list-style: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
      transition: all 0.2s ease-in-out;
    }
  }
`;
