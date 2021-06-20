class Fullscreen {
    request(elm) {
        if (elm.requestFullscreen) {
            elm.requestFullscreen();
        } else if (elm.webkitRequestFullscreen) {
            elm.webkitRequestFullscreen();
        } else if (elm.mozRequestFullScreen) {
            elm.mozRequestFullScreen();
        } else if (elm.msRequestFullscreen) {
            elm.msRequestFullscreen();
        }
    }

    exit() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            // @ts-ignore
        } else if (document.webkitExitFullscreen) {
            // @ts-ignore
            document.webkitExitFullscreen();
            // @ts-ignore
        } else if (document.mozCancelFullScreen) {
            // @ts-ignore
            document.mozCancelFullScreen();
            // @ts-ignore
        } else if (document.msExitFullscreen) {
            // @ts-ignore
            document.msExitFullscreen();
        }
    }

    get isFullscreen() {
        return (
            document.fullscreenElement || 
            // @ts-ignore
            document.webkitFullscreenElement || 
            // @ts-ignore
            document.mozFullScreenElement || 
            // @ts-ignore
            document.msFullscreenElement
        );
    }

    get enabled() {
        return (
            document.fullscreenEnabled || 
            // @ts-ignore
            document.webkitFullscreenEnabled || 
            // @ts-ignore
            document.mozFullScreenEnabled || 
            // @ts-ignore
            document.msFullscreenEnabled
        );
    }

    addEventListener(handler) {
        document.addEventListener("fullscreenchange", handler);
        document.addEventListener("webkitfullscreenchange", handler);
        document.addEventListener("mozfullscreenchange", handler);
        document.addEventListener("MSFullscreenChange", handler);
    }

    removeEventListener(handler) {
        document.removeEventListener("fullscreenchange", handler);
        document.removeEventListener("webkitfullscreenchange", handler);
        document.removeEventListener("mozfullscreenchange", handler);
        document.removeEventListener("MSFullscreenChange", handler);
    }
}

export default new Fullscreen();
