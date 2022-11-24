import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 681, text: 'IICC Round 2 AIR'},
  { number: 3226, text: 'IICC Round 1 AIR', },
  { number: 200 + "+", text: 'DSA Questions', },
  // { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index) => 
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      )}
    </Boxes>
  </Section>
);

export default Acomplishments;
