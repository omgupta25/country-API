const countriesContainer = document.querySelector('.countries-container')


fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((country) => {
            console.log(country);
            const countryCard = document.createElement("a")
            countryCard.classList.add("country-card")
            countryCard.href = `/country.html?${country.name.common}`


            countryCard.innerHTML = `
                <img src="${country.flags.svg}" alt="flag">
                <div class="card-text">
                <h3 class="card-title">${country.name.common}</h3>
                <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
                <p><b>Region: </b>${country.continents
                                    }                    </p>
                <p><b>Capital: </b>${country.capital}</p>
                </div>
                `

            countriesContainer.append(countryCard)


        })
    })




// const countryCard = document.createElement("a")
// countryCard.classList.add("country-card")


// const cardHTML = `
// <img src="https://flagcdn.com/er.svg" alt="flag">
// <div class="card-text">
// <h3 class="card-title">Eritrea</h3>
// <p><b>Population: </b>5352000</p>
// <p><b>Region: </b>Africa</p>
// <p><b>Capital: </b>Asmara</p>
// </div>
// `
// countryCard.innerHTML = cardHTML

// countriesContainer.append(countryCard)


// const cardImg = document.createElement('img')
// cardImg.src = "https://flagcdn.com/er.svg"
// countryCard.append(cardImg)