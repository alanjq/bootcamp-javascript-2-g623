import generateMarkup from "./markup";
// import renderSpinner from './renderSpinner'

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

//#region Avance de proyecto 1. Inciso 15

// La función que pide el PDF es similar a la siguiente
async function showRecipe() {
  // Inciso 23 (d) - Mostrar el spinner antes de cargar el contenido
  renderSpinner(recipeContainer)
  // Formar la URL usando el hash
  let hash = location.hash.slice(1)
  const urlapi = `https://forkify-api.herokuapp.com/api/v2/recipes/${hash}`
  return await fetch(urlapi)
    .then((response) => response.ok ? response.json() : Promise.reject('Recipe not found.'))
    // Inciso J
    // .then(response => response.status === 'success' ? response.data : Promise.reject(response.message))
    .then(response=> response.status === 'success' ? response.data : Promise.reject(response.message))
    // Avance 2
    .then(({ recipe }) => {
        recipeContainer.innerHTML = generateMarkup(recipe)
    })
    // Inciso D
    .catch((error) => {
      recipeContainer.innerHTML = error
    })
}

//#endregion / Avance de proyecto 1. Inciso 15

// showRecipe(urlapi).then(({recipe}) => {
//   recipeContainer.innerHTML = generateMarkup(recipe)
//   console.log('response', recipe);
// })

window.addEventListener('hashchange', showRecipe)
// ID: "5ed6604591c37cdc054bc886"
