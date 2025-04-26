import React from 'react';
import Section from './Section';
import styles from './Technologies.module.scss';
import { Code2, Braces, Workflow, Palette, Globe, Database, LineChart, Layers } from 'lucide-react';

interface TechnologyProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const TechnologyCard: React.FC<TechnologyProps> = ({ icon, name, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

const Technologies: React.FC = () => {
  const technologies = [
    {
      icon: <Braces size={40} />,
      name: 'JavaScript / TypeScript',
      description:
        'Doskonała znajomość nowoczesnego języka JavaScript i TypeScript umożliwiająca tworzenie solidnych aplikacji.',
    },
    {
      icon: <Code2 size={40} />,
      name: 'React',
      description:
        'Tworzenie responsywnych i interaktywnych interfejsów użytkownika z wykorzystaniem React i powiązanego ekosystemu.',
    },
    {
      icon: <Palette size={40} />,
      name: 'Frameworki CSS i narzędzia do stylizacji',
      description:
        'Projektowanie interfejsów przy użyciu frameworków CSS takich jak tailwindCSS, Bootstrap, Module.scss, SCSS, CSS oraz Material UI.',
    },
    {
      icon: <Workflow size={40} />,
      name: 'Redux / Context API',
      description:
        'Zarządzanie stanem aplikacji przy użyciu odpowiednich rozwiązań do zarządzania stanem.',
    },
    {
      icon: <Database size={40} />,
      name: 'Python',
      description:
        'Podstawowa znajomość języka Python, wykorzystywana w wielu obszarach, od backendu po analizę danych.',
    },
    {
      icon: <LineChart size={40} />,
      name: 'System kontroli wersji GIT',
      description:
        'Praca z systemem kontroli wersji GIT do zarządzania kodem i współpracy w zespole.',
    },
    {
      icon: <Globe size={40} />,
      name: 'SQL',
      description: 'Znajomość SQL, w tym zapytań, optymalizacji i zarządzania bazami danych.',
    },
    {
      icon: <Layers size={40} />,
      name: 'Praca z API (HTTP)',
      description:
        'Komunikacja z API przy użyciu protokołu HTTP, obsługa zapytań GET, POST i innych.',
    },
    {
      icon: <Code2 size={40} />,
      name: 'Testowanie aplikacji',
      description: 'Pisanie testów jednostkowych i e2e, aby zapewnić wysoką jakość aplikacji.',
    },
    {
      icon: <Code2 size={40} />,
      name: 'Algorytmy i struktury danych',
      description:
        'Dobra znajomość algorytmów i struktur danych, wykorzystywanych do rozwiązywania problemów programistycznych.',
    },
    {
      icon: <Globe size={40} />,
      name: 'HTML',
      description:
        'Doskonała znajomość HTML, w tym semantycznych znaczników i struktury dokumentu.',
    },
  ];

  return (
    <Section
      id="technologies"
      title="Technologie"
      subtitle="Moje narzędzia i obszary specjalizacji"
      className={styles.wrapper}
    >
      <div className={styles.grid}>
        {technologies.map((tech, index) => (
          <TechnologyCard
            key={index}
            icon={tech.icon}
            name={tech.name}
            description={tech.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Technologies;
