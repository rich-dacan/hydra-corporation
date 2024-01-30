"use client";
import Navbar from "@/components/organisms/Navbar";
import SuperiorBanner from "@/components/organisms/SuperiorBanner";
import { Container } from "@/components/templates/style";

export default function Home() {
  return (
    <Container>
      <Navbar />

      <SuperiorBanner />
    </Container>
  );
}
