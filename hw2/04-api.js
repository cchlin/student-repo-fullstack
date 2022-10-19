/** Exercise 04 - API **/

const url = 'https://restcountries.com/v3.1/all';

// Add your code here

// get the list element
const resultList = document.querySelector('#results');

const addCountry = (country) => {
  let element = document.createElement('li');
  // asign the value into list item and also format the number
  element.textContent = `${
    country.name.common
  } - ${country.population.toLocaleString('en-us')}`;
  resultList.append(element);
};

let getData = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // result containts accented alphabet so had to use localecomapre
      data.sort((a, b) => a.name.common.localeCompare(b.name.common));
      data.forEach((country) => {
        addCountry(country);
      });
    })
    .catch((error) => {
      let element = document.createElement('div');
      element.textContent = 'An error occured. Please reload the page.';
      resultList.append(element);
    });
};

getData(url);
