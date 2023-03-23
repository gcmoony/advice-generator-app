const url = "https://api.adviceslip.com/advice"

async function getAdvice() {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        document.getElementById("advice-id").innerHTML = data.slip.id;
        document.getElementById("advice-description").innerHTML = data.slip.advice;
    });
}

document.getElementById("get-advice-btn").addEventListener("click", getAdvice)

getAdvice();