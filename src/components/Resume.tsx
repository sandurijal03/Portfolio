import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import SmallTitle from './SmallTitle'
import Title from './Title'
import { BusinessCenter, School } from '@material-ui/icons'
import ResumeItem from './ResumeItem'

const Resume = () => {
  const briefCase = <BusinessCenter />
  const school = <School />
  return (
    <ResumeStyled>
      <Title title={'Resume'} span={'Resume'} />
      <InnerLayout>
        <div className='smallTitle'>
          <SmallTitle icon={school} title={'Study'} />
        </div>
        <div className='resumeContent'>
          <ResumeItem
            year={'2014 - 2015'}
            title={'High School'}
            subtitle={'Kanchanjunga  English High School'}
            text={'Studied physics, chemistry, math, biology,english,nepali'}
          />
          <ResumeItem
            year={'2016 - 2020'}
            title={'Computer Science'}
            subtitle={'Tribhuwan University'}
            text={
              'Studied c-programming, c++ programming, java programming, sql, advance database, cryptography etc...'
            }
          />
        </div>
        <div className='smallTitle uSmallTitleMargin'>
          <SmallTitle icon={briefCase} title={'Working experience'} />
        </div>
        <div className='resumeContent'>
          <ResumeItem
            year={'2014 - 2015'}
            title={'School Teacher'}
            subtitle={'Sigma English School'}
            text={'Taught Math, Science, Optional Math'}
          />
          <ResumeItem
            year={'2015 - 2016'}
            title={'Computer Operator'}
            subtitle={'Haldibari VDC'}
            text={
              'worked under the village secreteriat regarding computer works'
            }
          />
          <ResumeItem
            year={'2017 - 2019'}
            title={'Subisu Cablenet Pvt Ltd'}
            subtitle={'L1 engineer'}
            text={'helps client troubleshooting their network problem'}
          />
          <ResumeItem
            year={'2019 - 2021'}
            title={'Freelancer'}
            subtitle={''}
            text={'Developed several fullstack mern (graphql) app.'}
          />
          <ResumeItem
            year={'2021 June - 2021 December'}
            title={'Unilink Software Pvt. Ltd'}
            subtitle={'Fullstack developer'}
            text={'Javascript, react, nodejs, mongodb, graphql'}
          />
          <ResumeItem
            year={'2022 March - Present'}
            title={'Norbrik Solution Pty Ltd'}
            subtitle={'Fullstack developer'}
            text={'Javascript,Typescript, react, nodejs, azure sql, dotnet'}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  )
}

const ResumeStyled = styled.section`
  .smallTitle {
    padding-bottom: 3rem;
  }

  .uSmallTitleMargin {
    margin-top: 4rem;
  }

  .resumeContent {
    border-left: 2px solid var(--border-color);
  }
`

export default Resume
