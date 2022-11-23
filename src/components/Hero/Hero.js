import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am Abhay Jagtap. I am a 3rd year student studying at IIIT Vadodara.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;