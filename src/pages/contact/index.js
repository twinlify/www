import React, {useState} from 'react';
import styled from 'styled-components';
import $Button from '../../components/button';
import {darkGray} from '../../style/colors';

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
    margin-bottom: 2rem;
    border: unset;
`;

const $Label = styled.label`
    text-align: left;
`;

// -----------------------------------------------------------------------------

const Contact = () => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [companySize, setCompanySize] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <$Form onSubmit={handleSubmit}>
            <$Label for="email">Email adress</$Label>
            <$Input
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="example@mail.com"
                required
            />

            <$Label for="first-name">Prénom</$Label>
            <$Input
                type="text"
                id="first-name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="Prénom"
                required
            />

            <$Label for="last-name">Nom</$Label>
            <$Input
                type="text"
                id="last-name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder="Nom"
                required
            />

            <$Label for="company">Entreprise</$Label>
            <$Input
                type="text"
                id="company"
                value={company}
                onChange={e => setCompany(e.target.value)}
                placeholder="Entreprise"
                required
            />

            <$Label for="company-size">Taille de l'entreprise</$Label>
            <$Input
                as="select"
                name="pets"
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

            <$Button as="input" type="submit" value="Submit">Submit</$Button>
        </$Form>
    )
}
export default Contact;
