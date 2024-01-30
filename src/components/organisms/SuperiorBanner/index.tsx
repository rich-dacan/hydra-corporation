import React from "react";
import { Container, CustomTitle, Left } from "./style";
import Image from "next/image";
import ButtonDefault from "@/components/atoms/Button";

const SuperiorBanner: React.FC = () => {
  return (
    <Container>
      <Left>
        <CustomTitle>
          <b>Dive</b> Into The Depths
        </CustomTitle>
        <CustomTitle>
          Of <b>Virtual Reality</b>
        </CustomTitle>
        <p>
          Welcome to our portal, &ldquo;Dive Into The Depths, Of Virtual
          Reality,&rdquo; where we explore the boundless possibilities of
          virtual reality.
        </p>
        <p>
          In this space, you will discover how technology transforms sensory
          experiences, from immersive games to innovative educational
          simulations.{" "}
        </p>
        <p>
          Whether you&apos;re an enthusiast, professional, or educator,
          we&apos;re here to guide you on this thrilling journey where the line
          between the real and the virtual fades away.
        </p>
        <ButtonDefault>BUILD YOUR WORLD</ButtonDefault>
      </Left>
      <Image
        src="/media/image/banner-image-effects-figma.png"
        alt="Hydra Corporation"
        width={500}
        height={500}
      />
    </Container>
  );
};

export default SuperiorBanner;
