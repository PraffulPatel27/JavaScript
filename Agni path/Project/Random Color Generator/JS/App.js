const getColor = () => {
    // Hex code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    // 16 stands for hexadecimal

    console.log(randomNumber, randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    // copy to clipboard
    navigator.clipboard.writeText(randomCode);
}

//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor 
)

// Initial call
getColor ();