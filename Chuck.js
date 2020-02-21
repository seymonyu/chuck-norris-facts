// This function loads pokemon data from the Pokemon API
function chuckNorrisFacts() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  const pokemonId = 1;
  const url = "https://api.chucknorris.io/jokes/random";
  axios
    .get(url)
    .then(response => response.data)
    .then(chuckNorris => {
      {
        console.log("data decoded from JSON:", chuckNorris);
        // Build a block of HTML
        const chuckNorrisHtml = `
            <p><strong>${chuckNorris.value}</strong></p>
            <img src="${chuckNorris.icon_url}" />
          `;
        document.querySelector("#chuck-norris").innerHTML = chuckNorrisHtml;
      }
    });
}
chuckNorrisFacts();
