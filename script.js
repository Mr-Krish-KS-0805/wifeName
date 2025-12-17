let waittimer = null;
let letterTimer = null;
const input = document.querySelector("input")
input.addEventListener("input", () => {
    input.value = input.value.toUpperCase();
})

document.querySelector(".button").addEventListener("click", () => {

    const name = document.querySelector(".name").value.trim();
    if (name === "") return;
    
    else if (name === "SHIVAM") {
        document.querySelector(".guess").style.display = "block";
        document.getElementById("wait").innerHTML = "You are <b>bhadwa</b>! jaa Riya ka curves dekh."
        document.getElementById("again").style.display = "inline-block";
    }

    else if (name === "ANSHU") {
        document.querySelector(".guess").style.display = "block";
        document.getElementById("wait").innerHTML = "Kyo re bhadwe, <b>Dipasha</b> se man nahi bhara!"
        document.getElementById("again").style.display = "inline-block";
    }

    else if (name === "KRISH") {
        document.querySelector(".guess").style.display = "block";
        document.getElementById("wait").innerHTML= "<b>BSDK</b> mera laura dekh raha hai!"
        document.getElementById("again").style.display = "inline-block";
    }

    else {
        clearTimeout(waittimer);
        clearTimeout(letterTimer)

        document.querySelector(".guess").style.display = "block";

        document.getElementById("wait").innerHTML = "Wait a second"

        waittimer = setTimeout(() => {
            document.getElementById("greet").innerHTML = "<b>Hey, her name starts with</b>"

        }, 5000);

        letterTimer = setTimeout(() => {
            const letters = "ABCDEFGHIJKLMNOPQRSTUVY"
            const randomletter = letters[Math.floor(Math.random() * letters.length)];
            console.log(randomletter)
            document.getElementById("letter").innerHTML = randomletter;
            document.getElementById("again").style.display = "inline-block";
        }, 5000);

    }

    document.querySelector(".btn").style.display = "none";

})

document.getElementById("again").addEventListener("click", () => {
    clearTimeout(waittimer);
    clearTimeout(letterTimer);
    document.querySelector(".name").value = "";
    document.getElementById("letter").innerHTML = "";
    document.getElementById("greet").innerHTML = "";
    document.getElementById("again").style.display = "none";
    document.getElementById("wait").innerHTML = ""
     document.querySelector(".btn").style.display = "inline-block";


})
