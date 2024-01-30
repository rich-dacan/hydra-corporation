import Image from "next/image";
import React from "react";
import { NavbarContainer, TopicList } from "./style";
import ButtonDefault from "@/components/atoms/Button";

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
          <ButtonDefault>CONTACT US</ButtonDefault>
        </li>
        <li>
          <ButtonDefault inverted noBorder>
            JOIN HYDRA
          </ButtonDefault>
        </li>
      </TopicList>
    </NavbarContainer>
  );
};

export default Navbar;
