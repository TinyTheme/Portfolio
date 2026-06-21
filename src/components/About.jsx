import { useEffect, useRef, useState } from 'react';
import profileImage from '../assets/profileImage.png';

const technologies = [
  'JavaScript',
  'React',
  'Vite',
  'HTML',
  'CSS',
  'Git',
];

function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`about-section ${isVisible ? 'is-visible' : ''}`}
      id="about"
      ref={sectionRef}
    >
      <div className="about-inner">
        <div className="about-content">
          <h2 className="section-heading">
            <span>01.</span>
            About Me
          </h2>

          <div className="about-copy">
            <p>
              Hello, I'm Timothy Jerome Feraro, a{' '}
              <span>Web developer</span> who enjoys building clean,
              accessible, and practical web experiences.
            </p>
            <p>
              My work focuses on turning ideas into interfaces that feel simple
              to use and reliable to maintain. I care about{' '}
              <span>responsive design</span>, readable code, and thoughtful
              details that make products better for real people.
            </p>
            <p>
              I'm currently sharpening my skills through projects, learning new
              tools, and looking for opportunities to contribute to{' '}
              <span>impactful digital products</span>.
            </p>
          </div>

          <div className="about-tech">
            <p>Technologies I've been working with recently:</p>
            <ul>
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about-image-wrap">
          <div className="about-image-frame">
            <img src={profileImage} alt="Timothy Jerome Feraro" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
