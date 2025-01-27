document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded");
    const sceneEl = document.querySelector('a-scene');
    const uiDiv = document.getElementById("example-scanning-overlay");
    
    const sunTarget = document.getElementById("target-sun");
    const mercuryTarget = document.getElementById("target-mercury");
    const venusTarget = document.getElementById("target-venus");
    const earthTarget = document.getElementById("target-earth");
    const marsTarget = document.getElementById("target-mars");
    const jupiterTarget = document.getElementById("target-jupiter");
    const saturnTarget = document.getElementById("target-saturn");
    const uranusTarget = document.getElementById("target-uranus");
    const neptuneTarget = document.getElementById("target-neptune");
    const solarSystemTarget = document.getElementById("target-solar-system");
    const moonTarget = document.getElementById("target-moon");
    
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
    const solarSystemModel = document.getElementById("solar-system-model");


    sunTarget.addEventListener("targetFound", event => {
        uiDiv.style.display = "none";
    });

    sunTarget.addEventListener("targetLost", event => {
        const sunVideo = document.getElementById("sun-video");

        if (sunVideo.getAttribute("visible")){
            document.querySelector("#sun-video-mp4").pause();
            sunVideo.setAttribute("visible", false);
        }

        uiDiv.style.display = "block";
    });

    mercuryTarget.addEventListener("targetFound", event => {
        uiDiv.style.display = "none";
    });

    mercuryTarget.addEventListener("targetLost", event => {
        const mercuryVideo = document.getElementById("mercury-video");

        if (mercuryVideo.getAttribute("visible")){
            document.querySelector("#mercury-video-mp4").pause();
            mercuryVideo.setAttribute("visible", false);
        }
       
        uiDiv.style.display = "block";
    });

    venusTarget.addEventListener("targetFound", event => {
        uiDiv.style.display = "none";
    });

    venusTarget.addEventListener("targetLost", event => {
        const venusVideo = document.getElementById("venus-video");
        if (venusVideo.getAttribute("visible")){
            document.querySelector("#venus-video-mp4").pause();
            venusVideo.setAttribute("visible", false);
        }
        
        uiDiv.style.display = "block";
    });

    earthTarget.addEventListener("targetFound", event => {
        uiDiv.style.display = "none";
    });

    earthTarget.addEventListener("targetLost", event => {
        const earthVideo = document.getElementById("earth-video");

        if (earthVideo.getAttribute("visible")){
            document.querySelector("#earth-video-mp4").pause();
            earthVideo.setAttribute("visible", false);
        }

        uiDiv.style.display = "block";
    });

    moonTarget.addEventListener("targetFound", event => {
        uiDiv.style.display = "none";
    });

    moonTarget.addEventListener("targetLost", event => {
        const moonVideo = document.getElementById("moon-video");

        if (moonVideo.getAttribute("visible")){
            document.querySelector("#moon-video-mp4").pause();
            moonVideo.setAttribute("visible", false);
        }
        
        uiDiv.style.display = "block";
    });

    marsTarget.addEventListener("targetFound", event => {
        uiDiv.style.display = "none";
    });

    marsTarget.addEventListener("targetLost", event => {
        const marsVideo = document.getElementById("mars-video");

        if (marsVideo.getAttribute("visible")){
            document.querySelector("#mars-video-mp4").pause();
            marsVideo.setAttribute("visible", false);
        }
        
        uiDiv.style.display = "block";
    });

    jupiterTarget.addEventListener("targetFound", event => {
        uiDiv.style.display = "none";
    });

    jupiterTarget.addEventListener("targetLost", event => {
        const jupiterVideo = document.getElementById("jupiter-video");

        if (jupiterVideo.getAttribute("visible")){
            document.querySelector("#jupiter-video-mp4").pause();
            jupiterVideo.setAttribute("visible", false);
        }

        uiDiv.style.display = "block";
    });

    saturnTarget.addEventListener("targetFound", event => {
        uiDiv.style.display = "none";
    });

    saturnTarget.addEventListener("targetLost", event => {
        const saturnVideo = document.getElementById("saturn-video");

        if (saturnVideo.getAttribute("visible")){
            document.querySelector("#saturn-video-mp4").pause();
            saturnVideo.setAttribute("visible", false);
        }
        
        uiDiv.style.display = "block";
    });

    uranusTarget.addEventListener("targetFound", event => {
        uiDiv.style.display = "none";
    });

    uranusTarget.addEventListener("targetLost", event => {
        const uranusVideo = document.getElementById("uranus-video");

        if (uranusVideo.getAttribute("visible")){
            document.querySelector("#uranus-video-mp4").pause();
            uranusVideo.setAttribute("visible", false);
        }

        uiDiv.style.display = "block";
    });

    neptuneTarget.addEventListener("targetFound", event => {
        uiDiv.style.display = "none";
    });

    neptuneTarget.addEventListener("targetLost", event => {
        const neptuneVideo = document.getElementById("neptune-video");

        if (neptuneVideo.getAttribute("visible")){
            document.querySelector("#neptune-video-mp4").pause();
            neptuneVideo.setAttribute("visible", false);
        }
        
        uiDiv.style.display = "block";
    });

    solarSystemTarget.addEventListener("targetFound", event => {
        uiDiv.style.display = "none";
    });

    solarSystemTarget.addEventListener("targetLost", event => {
        const solarSystemVideo = document.getElementById("solar-system-video");

        if (solarSystemVideo.getAttribute("visible")){
            document.querySelector("#solar-system-video-mp4").pause();
            solarSystemVideo.setAttribute("visible", false);
        }
        
        uiDiv.style.display = "block";
    });

    sunModel.addEventListener("click", () => {
        const sunPanel = document.getElementById("sun-panel");
        const sunVideo = document.getElementById("sun-video");

        if (!sunPanel.getAttribute("visible") && !sunVideo.getAttribute("visible")){
            sunPanel.setAttribute("visible", true);
            console.log("texto!")
        } else if (sunPanel.getAttribute("visible") && !sunVideo.getAttribute("visible")){
            console.log("video!")
            sunPanel.setAttribute("visible", false);
            sunVideo.setAttribute("visible", true);
            document.querySelector("#sun-video-play").setAttribute("src", "#sun-video-mp4");
            document.querySelector("#sun-video-mp4").play();
        } else {
            console.log("nenhum!")
            document.querySelector("#sun-video-mp4").pause();
            sunPanel.setAttribute("visible", false);
            sunVideo.setAttribute("visible", false);
        }

    });

    mercuryModel.addEventListener("click", () => {
        const mercuryPanel = document.getElementById("mercury-panel");
        const mercuryVideo = document.getElementById("mercury-video");

        if (!mercuryPanel.getAttribute("visible") && !mercuryVideo.getAttribute("visible")){
            mercuryPanel.setAttribute("visible", true);
            console.log("texto!")
        } else if (mercuryPanel.getAttribute("visible") && !mercuryVideo.getAttribute("visible")){
            console.log("video!")
            mercuryPanel.setAttribute("visible", false);
            mercuryVideo.setAttribute("visible", true);
            document.querySelector("#mercury-video-play").setAttribute("src", "#mercury-video-mp4");
            document.querySelector("#mercury-video-mp4").play();
        } else {
            console.log("nenhum!")
            document.querySelector("#mercury-video-mp4").pause();
            mercuryPanel.setAttribute("visible", false);
            mercuryVideo.setAttribute("visible", false);
        }
    });

    venusModel.addEventListener("click", () => {
        const venusPanel = document.getElementById("venus-panel");
        const mercuryVideo = document.getElementById("venus-video");

        if (!venusPanel.getAttribute("visible") && !mercuryVideo.getAttribute("visible")){
            venusPanel.setAttribute("visible", true);
            console.log("texto!")
        } else if (venusPanel.getAttribute("visible") && !mercuryVideo.getAttribute("visible")){
            console.log("video!")
            venusPanel.setAttribute("visible", false);
            mercuryVideo.setAttribute("visible", true);
            document.querySelector("#venus-video-play").setAttribute("src", "#venus-video-mp4");
            document.querySelector("#venus-video-mp4").play();
        } else {
            console.log("nenhum!")
            document.querySelector("#venus-video-mp4").pause();
            venusPanel.setAttribute("visible", false);
            mercuryVideo.setAttribute("visible", false);
        }
    });

    earthModel.addEventListener("click", () => {
        const earthPanel = document.getElementById("earth-panel");
        const earthVideo = document.getElementById("earth-video");

        if (!earthPanel.getAttribute("visible") && !earthVideo.getAttribute("visible")){
            earthPanel.setAttribute("visible", true);
            console.log("texto!")
        } else if (earthPanel.getAttribute("visible") && !earthVideo.getAttribute("visible")){
            console.log("video!")
            earthPanel.setAttribute("visible", false);
            earthVideo.setAttribute("visible", true);
            document.querySelector("#earth-video-play").setAttribute("src", "#earth-video-mp4");
            document.querySelector("#earth-video-mp4").play();
        } else {
            console.log("nenhum!")
            document.querySelector("#earth-video-mp4").pause();
            earthPanel.setAttribute("visible", false);
            earthVideo.setAttribute("visible", false);
        }

    });

    moonModel.addEventListener("click", () => {
        const moonPanel = document.getElementById("moon-panel");
        const moonVideo = document.getElementById("moon-video");

        if (!moonPanel.getAttribute("visible") && !moonVideo.getAttribute("visible")){
            moonPanel.setAttribute("visible", true);
            console.log("texto!")
        } else if (moonPanel.getAttribute("visible") && !moonVideo.getAttribute("visible")){
            console.log("video!")
            moonPanel.setAttribute("visible", false);
            moonVideo.setAttribute("visible", true);
            document.querySelector("#moon-video-play").setAttribute("src", "#moon-video-mp4");
            document.querySelector("#moon-video-mp4").play();
        } else {
            console.log("nenhum!")
            document.querySelector("#moon-video-mp4").pause();
            moonPanel.setAttribute("visible", false);
            moonVideo.setAttribute("visible", false);
        }

    });

    marsModel.addEventListener("click", () => {
        const marsPanel = document.getElementById("mars-panel");
        const marsVideo = document.getElementById("mars-video");

        if (!marsPanel.getAttribute("visible") && !marsVideo.getAttribute("visible")){
            marsPanel.setAttribute("visible", true);
            console.log("texto!")
        } else if (marsPanel.getAttribute("visible") && !marsVideo.getAttribute("visible")){
            console.log("video!")
            marsPanel.setAttribute("visible", false);
            marsVideo.setAttribute("visible", true);
            document.querySelector("#mars-video-play").setAttribute("src", "#mars-video-mp4");
            document.querySelector("#mars-video-mp4").play();
        } else {
            console.log("nenhum!")
            document.querySelector("#mars-video-mp4").pause();
            marsPanel.setAttribute("visible", false);
            marsVideo.setAttribute("visible", false);
        }
    });

    jupiterModel.addEventListener("click", () => {
        const jupiterPanel = document.getElementById("jupiter-panel");
        const jupiterVideo = document.getElementById("jupiter-video");

        if (!jupiterPanel.getAttribute("visible") && !jupiterVideo.getAttribute("visible")){
            jupiterPanel.setAttribute("visible", true);
            console.log("texto!")
        } else if (jupiterPanel.getAttribute("visible") && !jupiterVideo.getAttribute("visible")){
            console.log("video!")
            jupiterPanel.setAttribute("visible", false);
            jupiterVideo.setAttribute("visible", true);
            document.querySelector("#jupiter-video-play").setAttribute("src", "#jupiter-video-mp4");
            document.querySelector("#jupiter-video-mp4").play();
        } else {
            console.log("nenhum!")
            document.querySelector("#jupiter-video-mp4").pause();
            jupiterPanel.setAttribute("visible", false);
            jupiterVideo.setAttribute("visible", false);
        }

    });

    saturnModel.addEventListener("click", () => {
        const saturnPanel = document.getElementById("saturn-panel");
        const saturnVideo = document.getElementById("saturn-video");

        if (!saturnPanel.getAttribute("visible") && !saturnVideo.getAttribute("visible")){
            saturnPanel.setAttribute("visible", true);
            console.log("texto!")
        } else if (saturnPanel.getAttribute("visible") && !saturnVideo.getAttribute("visible")){
            console.log("video!")
            saturnPanel.setAttribute("visible", false);
            saturnVideo.setAttribute("visible", true);
            document.querySelector("#saturn-video-play").setAttribute("src", "#saturn-video-mp4");
            document.querySelector("#saturn-video-mp4").play();
        } else {
            console.log("nenhum!")
            document.querySelector("#saturn-video-mp4").pause();
            saturnPanel.setAttribute("visible", false);
            saturnVideo.setAttribute("visible", false);
        }
    });

    uranusModel.addEventListener("click", () => {
        const uranusPanel = document.getElementById("uranus-panel");
        const uranusVideo = document.getElementById("uranus-video");

        if (!uranusPanel.getAttribute("visible") && !uranusVideo.getAttribute("visible")){
            uranusPanel.setAttribute("visible", true);
            console.log("texto!")
        } else if (uranusPanel.getAttribute("visible") && !uranusVideo.getAttribute("visible")){
            console.log("video!")
            uranusPanel.setAttribute("visible", false);
            uranusVideo.setAttribute("visible", true);
            document.querySelector("#uranus-video-play").setAttribute("src", "#uranus-video-mp4");
            document.querySelector("#uranus-video-mp4").play();
        } else {
            console.log("nenhum!")
            document.querySelector("#uranus-video-mp4").pause();
            uranusPanel.setAttribute("visible", false);
            uranusVideo.setAttribute("visible", false);
        }

    });

    neptuneModel.addEventListener("click", () => {
        const neptunePanel = document.getElementById("neptune-panel");
        const neptuneVideo = document.getElementById("neptune-video");

        if (!neptunePanel.getAttribute("visible") && !neptuneVideo.getAttribute("visible")){
            neptunePanel.setAttribute("visible", true);
            console.log("texto!")
        } else if (neptunePanel.getAttribute("visible") && !neptuneVideo.getAttribute("visible")){
            console.log("video!")
            neptunePanel.setAttribute("visible", false);
            neptuneVideo.setAttribute("visible", true);
            document.querySelector("#neptune-video-play").setAttribute("src", "#neptune-video-mp4");
            document.querySelector("#neptune-video-mp4").play();
        } else {
            console.log("nenhum!")
            document.querySelector("#neptune-video-mp4").pause();
            neptunePanel.setAttribute("visible", false);
            neptuneVideo.setAttribute("visible", false);
        }

    });

    solarSystemModel.addEventListener("click", () => {
        const solarSystemPanel = document.getElementById("solar-system-panel");
        const solarSystemVideo = document.getElementById("solar-system-video");

        if (!solarSystemPanel.getAttribute("visible") && !solarSystemVideo.getAttribute("visible")){
            solarSystemPanel.setAttribute("visible", true);
            console.log("texto!")
        } else if (solarSystemPanel.getAttribute("visible") && !solarSystemVideo.getAttribute("visible")){
            console.log("video!")
            solarSystemPanel.setAttribute("visible", false);
            solarSystemVideo.setAttribute("visible", true);
            document.querySelector("#solar-system-video-play").setAttribute("src", "#solar-system-video-mp4");
            document.querySelector("#solar-system-video-mp4").play();
        } else {
            console.log("nenhum!")
            document.querySelector("#solar-system-video-mp4").pause();
            solarSystemPanel.setAttribute("visible", false);
            solarSystemVideo.setAttribute("visible", false);
        }

    });

document.querySelector("#sun-video-mp4").pause();
document.querySelector("#mercury-video-mp4").pause();
document.querySelector("#venus-video-mp4").pause();
document.querySelector("#earth-video-mp4").pause();
document.querySelector("#moon-video-mp4").pause();
document.querySelector("#mars-video-mp4").pause();
document.querySelector("#jupiter-video-mp4").pause();
document.querySelector("#saturn-video-mp4").pause();
document.querySelector("#neptune-video-mp4").pause();
document.querySelector("#uranus-video-mp4").pause();
document.querySelector("#earth-video-mp4").pause();
document.querySelector("#neptune-video-mp4").pause();
document.querySelector("#solar-system-video-mp4").pause();
});