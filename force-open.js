function openInBrowser(target, browserScheme) {
    var ifc = document.createElement("div");
    ifc.innerHTML = `<iframe src='${browserScheme}${target}' style='width:0;height:0;border:0; border:none;visibility: hidden;'></iframe>`;
    document.body.appendChild(ifc);
}

function isInApp(appSpecificUserAgents) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    for (i = 0; i <= appSpecificUserAgents.length; i++) {
        if (userAgent.indexOf(appSpecificUserAgents[i]) > -1) return true;

    }
}
