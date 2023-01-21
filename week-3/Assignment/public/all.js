const answer = document.getElementById("answer");

fetch("http://localhost:3000/getData?number=10").then((data) =>
  data.text().then((html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    let text = doc.querySelector("h1").textContent;
    answer.innerHTML = `
      <h1>Answer: ${text}</h1>
    `;
  })
);
