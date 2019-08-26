const myurl = encodeURIComponent('https://api.ratesapi.io/api/latest');

const req = (myurl) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const json = JSON.parse(xhr.responseText);
            console.log("xhr json", json)
        }
    };
    xhr.open("GET", myurl, true);
    xhr.send();
}

(function () {
    req(myurl);
})();

const buttonXHR = document.querySelector(".button__xhr")
buttonXHR.addEventListener("click", req);