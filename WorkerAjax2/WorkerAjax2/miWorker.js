self.addEventListener("message", function (ev) {
    var fichero = ev.data; //objeto de tipo File o Blob!!! no es un string
    var lector = new FileReaderSync();

    /*lector.addEventListener("load", function () {
        self.postMessage(lector.result);
    }, false);*/

    lector.onload = function () {
        self.postMessage(lector.result);
    }
    lector.readAsText(fichero);
}, false);





