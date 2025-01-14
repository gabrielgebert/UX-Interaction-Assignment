document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded");
    const sceneEl = document.querySelector('a-scene');
    const switchButton = document.getElementById("next-button");
    const sunModel = document.getElementById("sun-model");
    var showTextSun = false;
    var text = document.getElementById("textAFrame");
    
    switchButton.addEventListener("click", () => {
        showText = !showText;
        text.setAttribute("visible", showText);
        text.setAttribute ("value", "Funcionou!");
        console.log("teste");
    });

    sunModel.addEventListener("click", () =>{
        console.log("click!")
        const sunPanel = document.getElementById("sun-panel");
        showTextSun = !showTextSun;
        sunPanel.setAttribute("visible", showTextSun);
    });
});
