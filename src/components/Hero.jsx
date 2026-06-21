import resume from "../assets/resume.pdf";

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Hi, my name is</p>
        <h1>Timothy Jerome Feraro.</h1>
        <h2>I build things for the web.</h2>
        <p className="hero-description">
          I'm a Web developer focused on creating useful, accessible, and
          impactful digital experiences. I enjoy solving problems, learning new
          technologies, and turning ideas into products that people can use
          every day.
        </p>
        <p className="hero-description">
          Currently, I'm building projects, expanding my skills, and looking for
          opportunities to contribute, learn, and grow.
        </p>
        <a className="hero-button" href={resume} download>
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
