self.addEventListener("message", hacerPetAjax, false);

function hacerPetAjax(event) {
    var petAjax = new XMLHttpRequest();
    petAjax.onreadystatechange = function () {
        if (petAjax.readyState == 4 && petAjax.status == 200) {
            //var localidades = petAjax.responseText;

            self.postMessage(petAjax.responseText);
        }
    };
    petAjax.open('GET', event.data, true);
    petAjax.send();
}