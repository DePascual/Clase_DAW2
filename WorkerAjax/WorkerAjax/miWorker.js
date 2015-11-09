self.addEventListener("message", hacerPetAjax, false);

function hacerPetAjax(ev) {
    var petAjax = new XMLHttpRequest();
    petAjax.onreadystatechange = function () {
        if (petAjax.readyState == 4 && petAjax.status == 200) {
            self.postMessage(JSON.stringify(petAjax.responseText));
        }
    };
    petAjax.open('GET', ev.data, true);
    petAjax.send();
}