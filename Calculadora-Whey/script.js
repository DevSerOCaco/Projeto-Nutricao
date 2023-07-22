// Função para calcular os resultados
function calculateResults(brand, price, weight, servingSize, protein, carbs, fat) {
  const percentOf100g = (100 / weight) * 100;
  const proteinPercentage = ((protein / servingSize) * 100).toFixed(2);
  const pricePerServing = (price / servingSize).toFixed(2);
  const servingsPerContainer = Math.floor(weight / servingSize);
  const pricePer100gProtein = ((percentOf100g * 100) / proteinPercentage).toFixed(2);
  const fatPer100gProtein = ((fat / protein) * 100).toFixed(2);
  const carbsPer100gProtein = ((carbs / protein) * 100).toFixed(2);

  return {
    brand,
    proteinPercentage,
    pricePerServing,
    servingsPerContainer,
    pricePer100gProtein,
    fatPer100gProtein,
    carbsPer100gProtein,
  };
}

document.getElementById("calculator-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const brand = document.getElementById("brand").value;
  const price = parseFloat(document.getElementById("price").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const servingSize = parseFloat(document.getElementById("serving-size").value);
  const protein = parseFloat(document.getElementById("protein").value);
  const carbs = parseFloat(document.getElementById("carbs").value);
  const fat = parseFloat(document.getElementById("fat").value);

  // Get the value of the clicked button to determine which result to display
  const clickedButtonValue = event.submitter.value;

  // Calculate the results
  const result = calculateResults(brand, price, weight, servingSize, protein, carbs, fat);

  // Display the results based on the clicked button
  if (clickedButtonValue === "1") {
    displayResults("result", result);
  } else if (clickedButtonValue === "2") {
    displayResults("result2", result);
  }
});

// Função para exibir os resultados
function displayResults(resultId, result) {
  document.getElementById(`${resultId}-brand`).textContent = result.brand;
  document.getElementById(`${resultId}-proteinPercentage`).textContent = `${result.proteinPercentage}%`;
  document.getElementById(`${resultId}-pricePerServing`).textContent = `R$ ${result.pricePerServing}`;
  document.getElementById(`${resultId}-servingsPerContainer`).textContent = `${result.servingsPerContainer}`;
  document.getElementById(`${resultId}-pricePer100gProtein`).textContent = `${result.pricePer100gProtein}`;
  document.getElementById(`${resultId}-fatPer100gProtein`).textContent = `${result.fatPer100gProtein}`;
  document.getElementById(`${resultId}-carbsPer100gProtein`).textContent = `${result.carbsPer100gProtein}`;
  // Adicione mais atribuições conforme necessário para outras células
}