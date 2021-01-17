import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { settings } from '../../data/dataStore.js';

const FAQ = () => (
  <Container>
    <Hero titleText={settings.faqContents.title} image={settings.faqContents.image} />
    <p>{settings.faqContents.description}</p>
  </Container>
);

export default FAQ;