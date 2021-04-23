import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {darkGray, green, darkGreen, white} from '../../style/colors';
import Button from '../../components/button';
import axios from 'axios';

// -----------------------------------------------------------------------------

const $Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin-top: 50px;
    padding: 60px;
    background: ${darkGray};
    border-radius: 20px;
`;
const $Input = styled.input`
    box-sizing: border-box;
    margin-bottom: 2rem;
    border: unset;
    outline: 0;
    border: 1px solid;

    ${props =>
    props.nonValidEmail &&
    css`
      border: 1px solid red;
    `}
`;

const $Label = styled.label`
    text-align: left;
    margin-bottom: 5px;
`;

// -----------------------------------------------------------------------------

const Contact = () => {

    const [email, setEmail] = useState('');
    const [nonValidEmail, setNonValidEmail] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
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
        <$Form onSubmit={handleSubmit}>
            <$Label htmlFor="email">Email adress</$Label>
            <$Input
                type="email"
                id="email"
                value={email}
                onChange={emailChange}
                nonValidEmail={nonValidEmail}
                placeholder="example@mail.com"
                required
            />

            <$Label htmlFor="first-name">Prénom</$Label>
            <$Input
                type="text"
                id="first-name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="Prénom"
                required
            />

            <$Label htmlFor="last-name">Nom</$Label>
            <$Input
                type="text"
                id="last-name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder="Nom"
                required
            />

            <$Label htmlFor="company">Entreprise</$Label>
            <$Input
                type="text"
                id="company"
                value={company}
                onChange={e => setCompany(e.target.value)}
                placeholder="Entreprise"
                required
            />

            <$Label htmlFor="company-size">Taille de l'entreprise</$Label>
            <$Input
                as="select"
                id="company-size"
                value={companySize}
                onChange={e => setCompanySize(e.target.value)}
                required
            >
                <option value="">Nombre de salarié(s)</option>
                <option value="0">0</option>
                <option value="1 à 9">1 à 9</option>
                <option value="10 à 49">10 à 49</option>
                <option value="50 à 499">50 à 499</option>
                <option value="500 à 999">500 à 999</option>
                <option value="Plus de 1000">Plus de 1000</option>
            </$Input>

            <Button type="submit">Submit</Button>
        </$Form>
    )
}
export default Contact;
