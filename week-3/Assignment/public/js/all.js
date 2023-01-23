
function getCookie() {
    let cookies = document.cookie;
    let cookiesNumber = cookies.split("=");
    let cookiesAnswer = cookiesNumber[1];
    const answer = document.getElementById("answer");
    answer.innerHTML = `
    <h1>Answer: ${cookiesAnswer}</h1>
    `;
}

getCookie();


