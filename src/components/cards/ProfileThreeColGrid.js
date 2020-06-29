import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import Bill from "images/Bill.jpg";
import Andrew from "images/Andrew.jpg";
import Bob from "images/Bob.jpg";
import Jay from "images/jay.jpg";
import Keith from "images/Keith.jpg";
import Kevin from "images/Kevin.jpg";
import Kjell from "images/Kjell.jpg";
import Marek from "images/Marek.jpg";
import Mike from "images/Mike.jpg";
import Luis from "images/Luis.jpg";

const SectionColor = tw.div`bg-red-800 -mx-8 md:mt-10 py-16 md:mx-2 xl:mt-16 xl:mx-8`;

const HeadingContainer = tw.div`text-gray-400`;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3 text-gray-400`;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-400`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-cover bg-top rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-gray-400`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-400`}
  9
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;
const ButtonSpacing = styled.div`
  ${tw`pt-4`}
`;

export default ({
  heading = "Meet These Fine Folks.",
  subheading = "Our Team",
  description = "Our Coaching and Instruction team is highly qualified and dedicated to helping you achieve your fitness and training goals.",
  cards = [
    {
      imageSrc: Bill,
      position: "Director",
      name: "Bill Kamataris",
    },
    {
      imageSrc: Kjell,
      position: "Sr. Judo Instructor",
      name: "Kjell Jensrud",
    },
    {
      imageSrc: Marek,
      position: "Judo Instructors",
      name: "Marek and Tomasz Kawka",
    },
    {
      imageSrc: Keith,
      position: "MMA Instructor",
      name: "Keith Rockel",
    },
    {
      imageSrc: Luis,
      position: "MMA Instructor",
      name: "Luis Rodriguez",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "MMA and Boxing Instructor",
      name: " Shawn Depaul",
    },
    {
      imageSrc: Mike,
      position: "JiuJitsu Instuctor",
      name: "Mike Selznick",
    },
    {
      imageSrc: Andrew,
      position: "Wrestling Coach",
      name: "Andrew Algarin",
    },
    {
      imageSrc: Jay,
      position: "Boxing Coach",
      name: "Jay Widdiss",
    },
    {
      imageSrc: Kevin,
      position: "Cross Fit Instructor",
      name: "Kevin Cann",
    },
    {
      imageSrc: Bob,
      position: "Judo Instructor",
      name: "Bob Sanquinet",
    },
  ],
}) => {
  return (
    <Container>
      <SectionColor>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <ButtonSpacing>
                  <CardButton>Qualifications</CardButton>
                </ButtonSpacing>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </SectionColor>
    </Container>
  );
};
