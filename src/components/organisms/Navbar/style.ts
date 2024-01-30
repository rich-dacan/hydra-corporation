import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 20px;
  top: 0;
  position: sticky;
  border-bottom: 3px solid #302c42;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.9px);
  -webkit-backdrop-filter: blur(2.9px);
  border: 1px solid rgba(255, 255, 255, 0.3);

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
