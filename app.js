const btn = document.getElementById("emoji-btn");

// Emoji Array
const emojis = [
    "π", "π", "π", "π", "π", "π₯°", "π", "π", 
    "π€©", "π", "π", "π", "π", "π€", "π€", "π€¨", 
    "π€­", "π€«", "π€", "π", "π‘", "π", "πΆβπ«οΈ", "π",
    "πΏ","π ","π©","π£","π",  
];

// Function
btn.addEventListener("mouseover", () => {
    btn.innerText = emojis[Math.floor(Math.random() * emojis.length)];

});
