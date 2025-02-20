const remote = require('electron').remote;

const win = remote.getCurrentWindow(); 
var appVersion = require("electron").remote.app.getVersion();
document.onreadystatechange = (event) => {
    if (document.readyState == "complete") {
        handleWindowControls();
    }
};

window.onbeforeunload = (event) => {
    win.removeAllListeners();
}

function handleWindowControls() {
    document.getElementById('min-button').addEventListener("click", event => {
        win.minimize();
    });

    document.getElementById('max-button').addEventListener("click", event => {
        win.maximize();
    });

    document.getElementById('restore-button').addEventListener("click", event => {
        win.unmaximize();
    });

    document.getElementById('close-button').addEventListener("click", event => {
        win.close();
    });
    document.getElementById('min-button-Linux').addEventListener("click", event => {
        win.minimize();
    });

    document.getElementById('max-button-Linux').addEventListener("click", event => {
        win.maximize();
    });

    document.getElementById('restore-button-Linux').addEventListener("click", event => {
        win.unmaximize();
    });

    document.getElementById('close-button-Linux').addEventListener("click", event => {
        win.close();
    });

    toggleMaxRestoreButtons();
    win.on('maximize', toggleMaxRestoreButtons);
    win.on('unmaximize', toggleMaxRestoreButtons);

    function toggleMaxRestoreButtons() {
        if (win.isMaximized()) {
            document.body.classList.add('maximized');
        } else {
            document.body.classList.remove('maximized');
        }
    }
}