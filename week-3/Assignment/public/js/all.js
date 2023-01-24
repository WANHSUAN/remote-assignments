function fetchData(url) {
  const answer = document.getElementById("answer");
  const text = document.getElementById("input").value;

  fetch(`/getData/?number=${text}`)
    .then((res) => res.text())
    .then((res) => {
      answer.innerHTML = `Answer: ${res}`;
    });
}


