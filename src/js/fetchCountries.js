export default function fetchCountries(inputValue) {
    const url = `https://restcountries.com/v2/name/${inputValue}`; 

    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .catch(error => {
        console.log(error);
      });
};