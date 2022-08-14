import React from 'react';
import Section from '../section/Section';
import ProjectsData from '../../data/featured_projects.json'
import { Fade } from 'react-reveal';
import FeaturedProject from '../featuredProject/FeaturedProject';

const Projects = () => {
  return (
    <Section title="Projects">
      <div className="experience-content">
        <ul className="experience-list">
          {ProjectsData.featured_projects.map((singleProject) => (
            <li key={`experience-${singleProject.name}`}>
              <Fade bottom duration={1000} distance="20px">
                <FeaturedProject project={singleProject} />
              </Fade>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Projects;