import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {darkGray, green, darkGreen, white} from '../../style/colors';
import Button from '../../components/button';
import axios from 'axios';
import {device} from '../../style/breakpoints';
import ContactImage from '../../img/image_contact.svg'

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

const $Text= styled.div`
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

const Contact = () => {

    const [email, setEmail] = useState('');
    const [nonValidEmail, setNonValidEmail] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [Name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [companySize, setCompanySize] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = JSON.stringify({
            "email" : email,
            "firstName" : firstName,
            "lastName": lastName,
            "company": company,
            "companySize": companySize
        })
        axios.post("https://yr98aub35j.execute-api.eu-west-3.amazonaws.com/production/save-contact", body)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    };

    const emailChange = (e) => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)) {
            console.log("VALID");
            setEmail(e.target.value);
            setNonValidEmail(false);
        } else {
            console.log("NON VALID");
            setEmail(e.target.value);
            setNonValidEmail(true);
        }
    };

    return (
    <$Main>
            <$ContainerImage>
                <ContactImage />
            </$ContainerImage>
            <$Form onSubmit={handleSubmit}>
                <$Text>Let's talk about everything!</$Text>
                <$Input
                    type="text"
                    id="name"
                    value={Name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your name"
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
                    <option value="">Company size</option>
                    <option value="0">0</option>
                    <option value="1 à 9">1 à 9</option>
                    <option value="10 à 49">10 à 49</option>
                    <option value="50 à 499">50 à 499</option>
                    <option value="500 à 999">500 à 999</option>
                    <option value="Plus de 1000">Plus de 1000</option>
                </$Input>

                <Button type="submit">Submit</Button>
            </$Form>
    </$Main>
    )
}
export default Contact;
