document.getElementById("portfolioForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const title = document.getElementById("title").value;
  const about = document.getElementById("about").value;
  const skills = document.getElementById("skills").value.split(",");
  const projects = document.getElementById("projects").value.split(",");
  const email = document.getElementById("email").value;

  const preview = document.getElementById("portfolioPreview");
  preview.innerHTML = `
    <div class="output">
      <h2>${name}</h2>
      <h3>${title}</h3>
      <p>${about}</p>
      <h4>Skills:</h4>
      <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}</ul>
      <h4>Projects:</h4>
      <ul>${projects.map(proj => `<li>${proj.trim()}</li>`).join("")}</ul>
      <p>Contact: <a href="mailto:${email}">${email}</a></p>
    </div>
  `;
});