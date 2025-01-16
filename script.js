document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded");
    const sceneEl = document.querySelector('a-scene');
    const sunModel = document.getElementById("sun-model");
    const mercuryModel = document.getElementById("mercury-model");
    const venusModel = document.getElementById("venus-model");
    const earthModel = document.getElementById("earth-model");
    const moonModel = document.getElementById("moon-model");
    const marsModel = document.getElementById("mars-model");
    const jupiterModel = document.getElementById("jupiter-model");
    const saturnModel = document.getElementById("saturn-model");
    const uranusModel = document.getElementById("uranus-model");
    const neptuneModel = document.getElementById("neptune-model"); 

    sunModel.addEventListener("click", () => {
        console.log("click!")
        const sunPanel = document.getElementById("sun-panel");
        if (sunPanel.getAttribute("visible")) {
            sunPanel.setAttribute("visible", false);
        } else {
            sunPanel.setAttribute("visible", true);
        }

    });

    mercuryModel.addEventListener("click", () => {
        console.log("click!")
        const mercuryPanel = document.getElementById("mercury-panel");
        if (mercuryPanel.getAttribute("visible")) {
            mercuryPanel.setAttribute("visible", false);
        } else {
            mercuryPanel.setAttribute("visible", true);
        }

    });

    venusModel.addEventListener("click", () => {
        console.log("click!")
        const venusPanel = document.getElementById("venus-panel");
        if (venusPanel.getAttribute("visible")) {
            venusPanel.setAttribute("visible", false);
        } else {
            venusPanel.setAttribute("visible", true);
        }

    });

    earthModel.addEventListener("click", () => {
        console.log("click!")
        const earthPanel = document.getElementById("earth-panel");
        if (earthPanel.getAttribute("visible")) {
            earthPanel.setAttribute("visible", false);
        } else {
            earthPanel.setAttribute("visible", true);
        }

    });

    moonModel.addEventListener("click", () => {
        console.log("click!")
        const moonPanel = document.getElementById("moon-panel");
        if (moonPanel.getAttribute("visible")) {
            moonPanel.setAttribute("visible", false);
        } else {
            moonPanel.setAttribute("visible", true);
        }

    });

    marsModel.addEventListener("click", () => {
        console.log("click!")
        const marsPanel = document.getElementById("mars-panel");
        if (marsPanel.getAttribute("visible")) {
            marsPanel.setAttribute("visible", false);
        } else {
            marsPanel.setAttribute("visible", true);
        }

    });

    jupiterModel.addEventListener("click", () => {
        console.log("click!")
        const jupiterPanel = document.getElementById("jupiter-panel");
        if (jupiterPanel.getAttribute("visible")) {
            jupiterPanel.setAttribute("visible", false);
        } else {
            jupiterPanel.setAttribute("visible", true);
        }

    });

    saturnModel.addEventListener("click", () => {
        console.log("click!")
        const saturnPanel = document.getElementById("saturn-panel");
        if (saturnPanel.getAttribute("visible")) {
            saturnPanel.setAttribute("visible", false);
        } else {
            saturnPanel.setAttribute("visible", true);
        }

    });

    uranusModel.addEventListener("click", () => {
        console.log("click!")
        const uranusPanel = document.getElementById("uranus-panel");
        if (uranusPanel.getAttribute("visible")) {
            uranusPanel.setAttribute("visible", false);
        } else {
            uranusPanel.setAttribute("visible", true);
        }

    });

    neptuneModel.addEventListener("click", () => {
        console.log("click!")
        const neptunePanel = document.getElementById("neptune-panel");
        if (neptunePanel.getAttribute("visible")) {
            neptunePanel.setAttribute("visible", false);
        } else {
            neptunePanel.setAttribute("visible", true);
        }

    });

});
