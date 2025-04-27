import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  demoUrl,
}) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
        <div className={styles.overlay}></div>
        <div className={styles.imageText}></div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tagsWrapper}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.linksWrapper}>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <Github />
              <span>Code</span>
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} ml-4`}
            >
              <ExternalLink />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
