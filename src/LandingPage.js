import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
// import { css } from "styled-components/macro";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container } from "components/misc/Layouts";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import ProfileCard from "components/cards/ProfileThreeColGrid.js";
import Schedule from "components/testimonials/TwoColumnWithImage.js";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import GetStarted from "components/cta/GetStarted.js";
import Footer from "components/footers/MiniCenteredFooter.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Container>
        <Hero />
        <ProfileCard />
        <Schedule />
        {/* <Pricing /> */}
        <GetStarted />
        <Footer />
      </Container>
    </AnimationRevealPage>
  );
};
