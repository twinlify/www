import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import Button from '../../components/button';
import axios from 'axios';
import {device} from '../../style/breakpoints';
import ContactImage from '../../img/image_contact.svg';

// -----------------------------------------------------------------------------

const $Main = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  padding-top: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(221, 238, 245);
  background: linear-gradient(
    156deg,
    rgba(221, 238, 245, 1) 0%,
    rgba(198, 208, 210, 1) 100%
  );
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const $Text = styled.div`
  margin-bottom: 1rem;
`;

const $ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    min-width: 400px;
    max-width: 80vw;
    max-height: 300px;
  }
  @media ${device.laptop} {
    svg {
      max-width: 40vw;
    }
  }
`;

const $Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-top: 0px;
  padding: 60px;
  border-radius: 20px;
  max-width: 90vw;
  width: 400px;
  button {
    align-self: center;
    min-width: 200px;
  }
`;
const $Input = styled.input`
  box-sizing: border-box;
  margin-bottom: 1.5rem;
  border: unset;
  outline: 0;
  padding: 1rem;
  border-radius: 5px;

  ${props =>
    props.nonValidEmail &&
    css`
      border: 1px solid red;
    `}
`;

// -----------------------------------------------------------------------------

const saveContact = ({
  email,
  firstName,
  lastName,
  company,
  companySize,
  reCaptchaToken
}) => {
  console.log('saving contact', {reCaptchaToken});
  const body = JSON.stringify({
    email,
    firstName,
    lastName,
    company,
    companySize,
    reCaptchaToken
  });

  axios
    .post(
      'https://yr98aub35j.execute-api.eu-west-3.amazonaws.com/production/save-contact',
      body
    )
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

// -----------------------------------------------------------------------------

const Contact = () => {
  const [email, setEmail] = useState('');
  const [nonValidEmail, setNonValidEmail] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [companySize, setCompanySize] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    grecaptcha.ready(function () {
      grecaptcha
        .execute('6LdDqpYaAAAAAEBvSx2RyEFrI0JS-PF9i_PfLiDH', {action: 'submit'})
        .then(function (reCaptchaToken) {
          saveContact({
            email,
            firstName,
            lastName,
            company,
            companySize,
            reCaptchaToken
          });
        });
    });
  };

  const emailChange = e => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        e.target.value
      )
    ) {
      setEmail(e.target.value);
      setNonValidEmail(false);
    } else {
      setEmail(e.target.value);
      setNonValidEmail(true);
    }
  };

  const title = "Let's talk about everything!";

  return (
    <$Main>
      <$ContainerImage>
        <ContactImage />
      </$ContainerImage>
      <$Form onSubmit={handleSubmit}>
        <$Text>{title}</$Text>
        <$Input
          type="text"
          id="first-name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <$Input
          type="text"
          id="last-name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        <$Input
          type="email"
          id="email"
          value={email}
          onChange={emailChange}
          nonValidEmail={nonValidEmail}
          placeholder="Email"
          required
        />

        <$Input
          type="text"
          id="company"
          value={company}
          onChange={e => setCompany(e.target.value)}
          placeholder="Company"
          required
        />

        <$Input
          as="select"
          id="company-size"
          value={companySize}
          onChange={e => setCompanySize(e.target.value)}
          required
        >
          <option value="" disabled>
            Company size
          </option>
          <option value="0">0</option>
          <option value="1-9">1-9</option>
          <option value="10-49">10-49</option>
          <option value="50-499">50-499</option>
          <option value="500-999">500-999</option>
          <option value="1000+">1000+</option>
        </$Input>

        <Button type="submit">Submit</Button>
      </$Form>
    </$Main>
  );
};
export default Contact;
