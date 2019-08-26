const url = 'https://api.ratesapi.io/api/latest';

const request = () => {
    fetch(url)
        .then(response => response.json())
        .then(json => console.log("fetch json", json))
        .catch(error => console.error(error));
}

(function () {
    request(url);
})();

const buttonFetch = document.querySelector(".button__fetch")
buttonFetch.addEventListener("click", request);