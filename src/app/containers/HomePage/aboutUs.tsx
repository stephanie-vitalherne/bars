import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import Jeep from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    py-4
    px-7
    md:px-0
    bg-white
  `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:text-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `};
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={Jeep} alt="" />
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
          molestiae temporibus facilis ipsa sequi nisi blanditiis quidem! Quis,
          nulla ratione cumque unde nostrum ea non in? Sequi unde commodi quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          corrupti sequi ad culpa vero sunt. Expedita at laboriosam odit, minus
          consectetur quam laudantium esse molestiae, placeat unde asperiores
          facilis! Laborum.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
