const url = "https://api.adviceslip.com/advice"

async function getAdvice() {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let adviceID = document.getElementById("advice-id");
        adviceID.innerHTML = data.slip.id;
        let adviceDesc = document.getElementById("advice-description");
        adviceDesc.innerHTML = data.slip.advice;
        adviceID.classList.remove("loading");
        adviceDesc.classList.remove("loading");
    });
}

getAdvice();

document.getElementById("get-advice-btn").addEventListener("click", getAdvice)