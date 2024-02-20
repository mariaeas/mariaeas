//nome: country.translations.por.common
//imagem: country.flags.png
//alt: country.flags.alt
//flag: country.flag
//região: country.region

/* fetch("https://webhook.site/3212e763-da94-4547-b7c2-dd33f449f396", {
    method: "POST",
    body: JSON.stringify(data)
})*/

/*MESMA COISA QUE O DEBAIXO:
let list = () => {fetch("https://restcountries.com/v3.1/all")
.then(json =>{*/

function search() {
    let input = document.getElementById("pesquisar").value
    input = input.toLowerCase();
    let busca = document.getElementsByClassName("col-4 mt-3");
    for (i = 0; i < busca.length; i++) {
        if (!busca[i].innerHTML.toLowerCase().includes(input)) {
            busca[i].style.display = "none"
        } else {
            busca[i].style.display = "list-items";
        }

    }
}
search();

function list() {
    fetch("https://restcountries.com/v3.1/all")
        .then(json => json.json())
        .then(countries => {
            let row = document.querySelector("#row")
            let countriesHtml = "";
            for (let index = 0; index < countries.length; index++) {
                const country = countries[index];

                countriesHtml += `
                <div class="col-4 mt-3">
                <div class="card" style="width: 18rem;">
                <img src="${country.flags.png}" class="card-img-top" alt="${country.flags.alt}">
                <div class="card-body">
                <h5 class="card-title">${country.translations.por.common}</h5>
                <p class="card-text">
                Região: ${country.region}
                </p>
                </div>
                </div>
                </div>
                `

            }
            row.innerHTML = countriesHtml;
        })


}


list();