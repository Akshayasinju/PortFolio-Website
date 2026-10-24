
const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

function Skills() {
  return (
    <section id="skills" className="section container">
      <h2>Skills</h2>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
