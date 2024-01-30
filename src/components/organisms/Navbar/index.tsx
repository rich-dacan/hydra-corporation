import Image from "next/image";
import React from "react";
import { Button, NavbarContainer, TopicList } from "./style";

const Navbar = () => {
  return (
    <NavbarContainer>
      <span>
        <Image
          src="/media/image/hydra-logo.svg"
          alt="Hydra Corporation - Logotipo"
          width={100}
          height={100}
        />
        <Image
          src="/media/image/hydra-grammar.svg"
          alt="Hydra Corporation"
          width={76}
          height={46}
        />
      </span>
      <TopicList>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>TECHNOLOGIES</li>
        <li>HOW TO</li>
        <li>
          <Button>CONTACT US</Button>
        </li>
        <li>
          <Button inverted noBorder>
            JOIN HYDRA
          </Button>
        </li>
      </TopicList>
    </NavbarContainer>
  );
};

export default Navbar;
