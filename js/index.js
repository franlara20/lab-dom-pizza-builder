// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  hasPepperoni: true,
  hasMushrooms: true,
  hasGreenPeppers: true,
  hasWhiteSauce: true,
  hasGlutenFreeCrust: true
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    // This is flag
    if (state.hasPepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    // This is flag
    if (state.hasMushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    // This is flag from state
    if (state.hasGreenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  const whiteSauce = document.querySelector('.sauce');
  // This is flag
  if (state.hasWhiteSauce) {
    whiteSauce.classList.add('sauce-white');
  } else {
    whiteSauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">
  const glutenFree = document.querySelector('.crust');
  // This is flag
  if (state.hasGlutenFreeCrust) {
    glutenFree.classList.add('crust-gluten-free');
  } else {
    glutenFree.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  let total = basePrice;
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const cuenta = document.querySelector('.panel.price ul');
  cuenta.innerHTML = '';
  for (ingredient in ingredients) {
    if (state[ingredient]) {
      cuenta.innerHTML += `<li> ${ingredients[ingredient].price} ${ingredients[ingredient].name} </li>`;
      total += ingredients[ingredient].price;
    }
  }
  const priceElemnet = document.querySelector('.panel.price strong');
  priceElemnet.innerHTML = `$ ${total}`;
}

renderEverything();


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.hasPepperoni = !state.hasPepperoni;
  console.log('Button pepperoni clicked');
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.hasMushrooms = !state.hasMushrooms;
  console.log('Button mushroom clicked');
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', () => {
    state.hasGreenPeppers = !state.hasGreenPeppers;
    console.log('Button Green Peppers clicked');
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.hasWhiteSauce = !state.hasWhiteSauce;
  console.log('Button white sauce clicked');
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.hasGlutenFreeCrust = !state.hasGlutenFreeCrust;
  console.log('Button gluten-free crust clicked');
  renderEverything();
});


