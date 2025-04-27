import React from 'react';
import Section from '../Technologies/Section';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.scss';
import Project_1 from '../../assets/images/project_1.png';
import Project_2 from '../../assets/images/project_2.png';
import Project_3 from '../../assets/images/project_3.png';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Kunegunda-TS',
      description: 'opis',
      image: Project_1,
      tags: ['HTML', 'SCSS', 'TypeScript', 'Webpack'],
      githubUrl: 'https://github.com/KunegundaKosek/Kunegunda-TS',
      demoUrl: 'https://kunegundakosek.github.io/Kunegunda-TS/frontend/public/dist',
    },
    {
      title: 'React+TS Shop',
      description: '',
      image: Project_2,
      tags: ['React', 'TypeScript', 'Redux', 'Module SCSS', 'i18Next', 'unit Testing', 'Vercel'],
      githubUrl: 'https://github.com/KunegundaKosek/Shop',
      demoUrl: 'https://kunegunda-react-ts-shop.vercel.app',
    },
    {
      title: 'Aplikacja pogodowa - Python',
      description: '',
      image: Project_3,
      tags: ['Python', 'unittest', 'weather API'],
      githubUrl: 'https://github.com/KunegundaKosek/Weather_Python',
      demoUrl: '#',
    },
    {
      title: 'AUTOMeme',
      description:
        'An analytics dashboard for monitoring social media performance across multiple platforms.',
      image: '',
      tags: ['React', 'TypeScript', 'D3.js', 'REST API'],
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      title: 'Minecraft',
      description:
        'A responsive portfolio website to showcase development skills and projects with smooth animations.',
      image: '',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: '#',
      demoUrl: '#',
    },

    {
      title: 'Aplikacja pogodowa Vue.js',
      description: '',
      image: '',
      tags: ['Vue.js', 'TypeScript', 'Chart.js', 'Weather API'],
      githubUrl: '#',
      demoUrl: '#',
    },

    {
      title: 'Kalkulator - Angular',
      description: '',
      image: '',
      tags: ['Angular', 'TypeScript', 'Angular Material UI'],
      githubUrl: '#',
      demoUrl: '#',
    },
  ];

  return (
    <Section
      id="projects"
      title="Projekty"
      subtitle="Wybór moich ostatnich prac i projektów osobistych"
    >
      <div className={styles.projectsWrapper}>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
