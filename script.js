document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded");
    const sceneEl = document.querySelector('a-scene');
    const switchButton = document.getElementById("next-button");
    var showText = true;
    var text = document.getElementById("textAFrame");
    
    switchButton.addEventListener("click", () => {
        showText = !showText;
        text.setAttribute("visible", showText);
        text.setAttribute ("value", "Funcionou!");
        console.log("teste");
    });
});