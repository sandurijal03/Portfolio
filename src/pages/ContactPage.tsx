import React from 'react'
import { InnerLayout, MainLayout } from '../styles/Layouts'
import styled from 'styled-components'
import Title from '../components/Title'
import PrimaryButton from '../components/PrimaryButton'
import { Phone, Email, LocationOn } from '@material-ui/icons'
import ContactItem from '../components/ContactItem'

const ContactPage = () => {
  const phone = <Phone />
  const email = <Email />
  const location = <LocationOn />

  return (
    <MainLayout>
      <Title title={'Contact'} span={'Contact'} />

      <ContactPageStyled>
        <InnerLayout className={'contact-section'}>
          <div className='leftContent'>
            <div className='contactTitle'>
              <h4>Get in touch</h4>
            </div>
            <form className='form' method='post' action='mailto: sandurijal03@hotmail.com'>
              <div className='formField'>
                <label htmlFor='name'>Enter your name</label>
                <input type='text' id='name' />
              </div>

              <div className='formField'>
                <label htmlFor='email'>Enter your email</label>
                <input type='email' id='email' />
              </div>

              <div className='formField'>
                <label htmlFor='subject'>Enter your subject</label>
                <input type='text' id='subject' />
              </div>

              <div className='formField'>
                <label htmlFor='textarea'>Enter Message</label>
                <textarea
                  name='textarea'
                  id='textarea'
                  cols={30}
                  rows={10}
                ></textarea>
              </div>
              <div className='formField formButton'>
                <PrimaryButton title='send email' />
              </div>
            </form>
          </div>
          <div className='rightContent'>
            <ContactItem
              title={'Phone'}
              icon={phone}
              contact1={'+977-9844646498'}
              contact2={''}
            />
            <ContactItem
              title={'Email'}
              icon={email}
              contact1={'sandurijal03@hotmail.com'}
              contact2={'sandurijal03@gmail.com'}
            />
            <ContactItem
              title={'Location'}
              icon={location}
              contact1={'kathmandu nepal'}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  )
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;

    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .formButton {
        margin-bottom: 2rem;
      }
    }

    .rightContent {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contactTitle {
      h4 {
        color: var(--white-color);
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;

      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .formField {
        margin-top: 2rem;
        position: relative;
        label {
          position: absolute;
          left: 20px;
          top: -20px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          color: inherit;
          height: 3.1rem;
          padding: 0 15px;
          width: 100%;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
      .formButton {
        margin-bottom: 3rem;
      }
    }
  }
`

export default ContactPage
