self.addEventListener("connect", function (ev) {
    var puerto = ev.ports[0]; //objeto de tipo MessagePort
    puerto.start();

    puerto.addEventListener("message", function (e) {
        var petAjax = new XMLHttpRequest;

        petAjax.onreadystatechange = function () {
            if (petAjax.readyState == 4 && petAjax.status == 200) {
                puerto.postMessage(petAjax.responseText);
            }
        }
        petAjax.open('GET', e.data, true);
        petAjax.send();
    }, false);

}, false);