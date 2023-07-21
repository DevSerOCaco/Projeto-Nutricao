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
  const resultHTML = `
    <h3>${result.brand}</h3>
    <p><strong>Porcentagem de Proteína:</strong> ${result.proteinPercentage}%</p>
    <p><strong>Preço por Dose Recomendada:</strong> R$ ${result.pricePerServing}</p>
    <p><strong>Doses Recomendadas por Embalagem:</strong> ${result.servingsPerContainer}</p>
    <p><strong>Preço por 100g de Proteína:</strong> R$ ${result.pricePer100gProtein}</p>
    <p><strong>Gordura por 100g de Proteína:</strong> ${result.fatPer100gProtein}g</p>
    <p><strong>Carboidrato por 100g de Proteína:</strong> ${result.carbsPer100gProtein}g</p>
  `;
  document.getElementById(resultId).innerHTML = resultHTML;
}