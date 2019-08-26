const myurl = encodeURIComponent('https://api.ratesapi.io/api/latest');

const req = () => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const json = JSON.parse(xhr.responseText);
            console.log("xhr json", json)
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

(function () {
    req(myurl);
})();

const buttonXHR = document.querySelector(".button__xhr")
buttonXHR.addEventListener("click", req);