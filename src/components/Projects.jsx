
const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio website to showcase my skills, education, and projects.",
    tools: "React, CSS, JavaScript",
    link: "https://github.com/Akshayasinju/PortFolio-Website"

  },
  {
    title: "Food Ordering Website",
    description:
      "A frontend website to browse food items and explore a food ordering interface.",
    tools: "HTML, CSS, JavaScript",
    link: ""
  }
];

function Projects() {
  return (
    <section id="projects" className="section container">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="card" key={project.title}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p>
              <strong>Tools:</strong> {project.tools}
            </p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View project
              </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;



