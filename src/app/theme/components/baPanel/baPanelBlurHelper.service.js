function baPanelBlurHelper($q) {
    let res = $q.defer();
    let computedStyle = getComputedStyle(document.body, ':before');
    let image = new Image();
    image.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
    image.onerror = function () {
        res.reject();
    };
    image.onload = function () {
        res.resolve();
    };

    this.bodyBgLoad = function () {
        return res.promise;
    };

    this.getBodyBgImageSizes = function () {
        let elemW = document.documentElement.clientWidth;
        let elemH = document.documentElement.clientHeight;
        if (elemW <= 640) return;
        let imgRatio = (image.height / image.width);       // original img ratio
        let containerRatio = (elemH / elemW);     // container ratio

        let finalHeight, finalWidth;
        if (containerRatio > imgRatio) {
            finalHeight = elemH;
            finalWidth = (elemH / imgRatio);
        } else {
            finalWidth = elemW;
            finalHeight = (elemW * imgRatio);
        }
        return { width: finalWidth, height: finalHeight, positionX: (elemW - finalWidth) / 2, positionY: (elemH - finalHeight) / 2 };
    };
};

export default baPanelBlurHelper;
