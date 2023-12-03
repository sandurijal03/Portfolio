import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Progress from './Progress';
import Title from './Title';

const Skills = () => {
  return (
    <SkillsStyled>
      <Title title={'My  Skills'} span={'My Skills'} />
      <InnerLayout>
        <div className='skills'>
          <Progress title={'HTML5'} width={'95%'} text={'95%'} />
          <Progress title={'CSS3'} width={'95%'} text={'95%'} />
          <Progress title={'TS'} width={'80%'} text={'80%'} />
          <Progress title={'JS'} width={'90%'} text={'90%'} />
          <Progress title={'REACT'} width={'95%'} text={'95%'} />
          <Progress title={'NODE'} width={'95%'} text={'90%'} />
          <Progress title={'GRAPHQL'} width={'95%'} text={'95%'} />
          <Progress title={'RUST'} width={'75%'} text={'75%'} />
          <Progress title={'DotNet'} width={'50%'} text={'50%'} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
};

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;

    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
