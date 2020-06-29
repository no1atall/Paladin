import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";

import Club from "images/club.jpg";

import "slick-carousel/slick/slick.css";

const Container = tw.div`relative`;
const Content = tw.div`-mx-8 py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center text-orange-600`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const TestimonialSliderContainer = tw.div`mt-24`;
const Testimonial = tw.div`flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`;
const ScheduleContainer = styled.div`
  ${tw` bg-red-800  md:w-2/4 md:ml-16 rounded flex flex-col max-w-xs md:max-w-none`}
`;

const InfoWrapper = tw.div`ml-8 mt-4 text-4xl text-orange-600`;
const Info = tw.div`flex flex-col lg:flex-row`;
const Weekday = tw.h4`font-medium lg:w-2/4`;
const ClassInfo = tw.div`text-2xl text-yellow-500 mb-2`;
const Class = tw.p``;
const Time = tw.p`flex flex-col xl:flex-row xl:justify-between text-base xl:mr-10`;
const Age = tw.span``;
const Spacer = tw.div`mb-4`;
const Spacerxl = tw.div`xl:mt-4`;

const TextContainer = tw.div`flex flex-col text-4xl text-orange-600 font-medium max-w-xs md:max-w-none md:mx-8 md:w-2/4 py-4  `;
const SectionGroup = tw.div`mx-8`;
const TextHeading = tw.h4``;
const GroupText = tw.p`text-gray-900 text-lg mt-2 mb-4 font-medium `;
const ClassText = tw.p`text-gray-900 mt-4 normal-case text-lg font-medium`;
const InteriorSection = tw.div`flex flex-col mt-4 xl:flex-row`;
const ClubImage = styled.div`
  ${tw`xl:w-1/2`}
  img {
    ${tw`rounded`}
  }
`;
const TextWrapper = tw.div`xl:w-1/2`;
const FacilitiesText = tw.p`text-gray-900 text-lg font-medium mt-4  xl:mt-0 xl:ml-8 `;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 z-10 text-red-800  transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 z-10 text-red-800 transform translate-x-2/3 translate-y-8`;

export default () => {
  /*
   * You can modify the testimonials shown by modifying the array below
   * You can add or remove objects from the array as you need.
   */

  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Our Schedule and Programs</HeadingTitle>
          <HeadingDescription></HeadingDescription>
        </HeadingInfoContainer>
        <TestimonialSliderContainer>
          <Testimonial>
            <ScheduleContainer>
              <Spacerxl />
              <InfoWrapper>
                <Info>
                  <Weekday>
                    Mon
                    <ClassInfo>
                      <Class>Boxing & Kickboxing</Class>
                      <Time>
                        6pm - 8:30pm
                        <Age> Kids, Teen, Adult </Age>
                      </Time>
                    </ClassInfo>
                    <ClassInfo>
                      <Class>Judo & Jui-Jitsu</Class>
                      <Time>
                        7pm - 8:30pm
                        <Age> Teen and Adult </Age>
                      </Time>
                    </ClassInfo>
                  </Weekday>
                  <Weekday>
                    Tue
                    <ClassInfo>
                      <Class>Boxing & Kickboxing</Class>
                      <Time>
                        6pm - 8:30pm
                        <Age> Kids, Teen, Adult </Age>
                      </Time>
                    </ClassInfo>
                    <ClassInfo>
                      <Class>MMA</Class>
                      <Time>
                        6:30pm - 7:30pm
                        <Age> Teen and Adult </Age>
                      </Time>
                    </ClassInfo>
                    <ClassInfo>
                      <Class>Wresling (Seasonal)</Class>
                      <Time>
                        7:15pm - 8:30pm
                        <Age> Teen and Adult </Age>
                      </Time>
                    </ClassInfo>
                  </Weekday>
                </Info>
              </InfoWrapper>
              <InfoWrapper>
                <Info>
                  <Weekday>
                    Wed
                    <ClassInfo>
                      <Class>Boxing & Kickboxing</Class>
                      <Time>
                        6pm - 8:30pm
                        <Age> Kids, Teen, Adult </Age>
                      </Time>
                    </ClassInfo>
                    <ClassInfo>
                      <Class>Judo & Jui-Jitsu</Class>
                      <Time>
                        6:15pm - 7pm
                        <Age>Kids</Age>
                      </Time>
                    </ClassInfo>
                    <ClassInfo>
                      <Class>Judo & Jui-Jitsu</Class>
                      <Time>
                        7pm - 8:30pm
                        <Age> Kids, Teen, Adult</Age>
                      </Time>
                    </ClassInfo>
                    <ClassInfo>
                      <Class>Kicking Class</Class>
                      <Time>
                        7:30pm - 8:30pm
                        <Age>Kids, Teen, Adult</Age>
                      </Time>
                    </ClassInfo>
                  </Weekday>
                  <Weekday>
                    Thur
                    <ClassInfo>
                      <Class>Boxing & Kickboxing</Class>
                      <Time>
                        6pm - 8:30pm
                        <Age> Kids, Teen, Adult </Age>
                      </Time>
                    </ClassInfo>
                    <ClassInfo>
                      <Class>MMA</Class>
                      <Time>
                        6:30pm - 7:30pm
                        <Age> Adult </Age>
                      </Time>
                    </ClassInfo>
                    <ClassInfo>
                      <Class>Woman's Self Defence</Class>
                      <Time>
                        6pm - 8pm
                        <Age> Teen and Adult </Age>
                      </Time>
                    </ClassInfo>
                    <ClassInfo>
                      <Class>Paladin Jui-Jitsu</Class>
                      <Time>
                        7pm - 8pm
                        <Age> Adult </Age>
                      </Time>
                    </ClassInfo>
                  </Weekday>
                </Info>
              </InfoWrapper>
              <InfoWrapper>
                <Info>
                  <Weekday>
                    Fri
                    <ClassInfo>
                      <Class>Self Defense for Law Enforcement</Class>
                      <Time>
                        Contact Us for Times
                        <Age> Adult </Age>
                      </Time>
                    </ClassInfo>
                  </Weekday>
                  <Weekday>
                    Sun
                    <ClassInfo>
                      <Class>Black Belt Jui-Jitsu, Pancration, MMA, BJJ</Class>
                      <Time>
                        10am - 1pm
                        <Age> Adult </Age>
                      </Time>
                    </ClassInfo>
                  </Weekday>
                </Info>
                <Spacer />
              </InfoWrapper>
            </ScheduleContainer>
            <TextContainer>
              <SectionGroup>
                <TextHeading>Age Groups</TextHeading>
                <GroupText>Kids: 8-13 years old</GroupText>
                <GroupText>Teen: 13-18 years old</GroupText>
                <GroupText>Adult: 19+ years old</GroupText>
              </SectionGroup>
              <SectionGroup>
                <TextHeading>First Time Visitors</TextHeading>
                <ClassText>
                  {" "}
                  You are welcome to stop in any time for our boxing classes. We
                  as you the check in with one of our certified boxing coaches
                  before you start your workout. Generally, boxing workout last
                  between 45 minutes and an hour.{" "}
                </ClassText>
                <ClassText>
                  {" "}
                  Our Kicking Class focuses on teaching you how to perform
                  powerful and effective kicks. Blend these with other combat
                  skills any of many available progams for a fun way to get and
                  stay fit.{" "}
                </ClassText>
              </SectionGroup>
              <Spacer />
              <SectionGroup>
                <TextHeading>Our Facilities</TextHeading>
                <InteriorSection>
                  <ClubImage>
                    <img src={Club} alt="Club Interior"></img>
                  </ClubImage>
                  <TextWrapper>
                    <FacilitiesText>
                      Our facilites are spacious and include plenty of training
                      space. Half of our floor space is used to house a
                      professional boxing ring and a well padded 50 square foot
                      Judo mat. Paired with a full line of universal training
                      equipment, our facility is the prefect place to train.
                    </FacilitiesText>
                    {/* <FacilitiesText>
                      We also have heavy bags, and speed bags hung around the
                      floor. Paired with a full line of universal training
                      equipment, our facility is the prefect place to train.
                    </FacilitiesText> */}
                  </TextWrapper>
                </InteriorSection>
              </SectionGroup>
            </TextContainer>
          </Testimonial>
        </TestimonialSliderContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
