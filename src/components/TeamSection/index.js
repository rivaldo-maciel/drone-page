import React from 'react';
import './style.css';
import CardProfile from '../CardProfile';
import data from '../../data.js';
import { Section } from './style.js';

function TeamSection() {
  const { Team } = data;
  return (
    <Section>
      {
        Team.map((person) => (
          <CardProfile
            src={ person.src }
            title={ person.title }
            text={ person.text }
            key={ person.id }
          />
        ))
      }
    </Section>
  );
}

export default TeamSection;