import React from 'react';
import { DiDatabase, DiDjango, DiFirebase, DiGit, DiGithub, DiGithubBadge, DiHeroku, DiJava, DiJavascript, DiMysql, DiNodejs, DiPython, DiReact, DiVisualstudio, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked on range of technologies in the web development world.From Back-end To Design.
    </SectionText>
    <List>
    <ListItem>
        <DiReact size="10rem" />
        {/* <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Worked with <br />
            React.
          </ListParagraph>
        </ListContainer> */}
      </ListItem>
      <ListItem>
        <DiNodejs size="10rem" />
        {/* <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Django and Node and Databases.
          </ListParagraph>
        </ListContainer> */}
      </ListItem>
      {/* <ListItem>
        <DiZend size="10rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma.
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
      <ListItem>
        <DiDjango  size="10rem"/>
      </ListItem>
      <ListItem>
        <DiGit  size="10rem"/>
      </ListItem>
      <ListItem>
        <DiGithubBadge  size="10rem"/>
      </ListItem>
      <ListItem>
        <DiHeroku  size="10rem"/>
      </ListItem>
      <ListItem>
        <DiJava  size="10rem"/>
      </ListItem>
      <ListItem>
        <DiJavascript  size="10rem"/>
      </ListItem>
      <ListItem>
        <DiPython  size="10rem"/>
      </ListItem>
      <ListItem>
        <DiDatabase  size="10rem"/>
      </ListItem>
      <ListItem>
        <DiMysql  size="10rem"/>
      </ListItem>
      <ListItem>
        <DiVisualstudio  size="10rem"/>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
