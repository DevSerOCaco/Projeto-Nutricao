// Função para calcular os resultados
function precoPor100gProteina(pesoTotal, precoTotal, porcentagemProteina) {
  const quantidadeProteina = (pesoTotal * porcentagemProteina) / 100;
  const precoPorGramaProteina = precoTotal / quantidadeProteina;
  const precoPor100gProteina = precoPorGramaProteina * 100;

  return precoPor100gProteina.toFixed(2);
}

function calculateResults(brand, price, weight, servingSize, protein, carbs, fat) {
  const percentOf100g = (100 / weight) * 100;
  const proteinPercentage = ((protein / servingSize) * 100).toFixed(2);
  const servingsPerContainer = Math.floor(weight / servingSize);
  const pricePerServing = (price / servingsPerContainer).toFixed(2);
  const pricePer100gProtein = precoPor100gProteina(weight, price, proteinPercentage);
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
    compareResults();
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

function extractNumericValue(text) {
  return parseFloat(text.replace(/[^\d.-]/g, ''));
}

function compareResults(){
  const proteinPorcentage1 = parseInt(document.getElementById("result-proteinPercentage").textContent);
  const proteinPorcentage2 = parseInt(document.getElementById("result2-proteinPercentage").textContent);
  if (proteinPorcentage1 > proteinPorcentage2) {
    document.getElementById("result-proteinPercentage").style.backgroundColor= "green";
    document.getElementById("result2-proteinPercentage").style.backgroundColor= "red";
  } else if(proteinPorcentage1 < proteinPorcentage2) {
    document.getElementById("result-proteinPercentage").style.backgroundColor= "red";
    document.getElementById("result2-proteinPercentage").style.backgroundColor= "green";
  } else {
    document.getElementById("result-proteinPercentage").style.backgroundColor= "gray";
    document.getElementById("result2-proteinPercentage").style.backgroundColor= "gray";
  }

  const pricePerServing1 = extractNumericValue(document.getElementById("result-pricePerServing").textContent);
  const pricePerServing2 = extractNumericValue(document.getElementById("result2-pricePerServing").textContent);
  if (pricePerServing1 < pricePerServing2) {
    document.getElementById("result-pricePerServing").style.backgroundColor= "green";
    document.getElementById("result2-pricePerServing").style.backgroundColor= "red";
  } else if(pricePerServing1 > pricePerServing2) {
    document.getElementById("result-pricePerServing").style.backgroundColor= "red";
    document.getElementById("result2-pricePerServing").style.backgroundColor= "green";
  } else {
    document.getElementById("result-pricePerServing").style.backgroundColor= "gray";
    document.getElementById("result2-pricePerServing").style.backgroundColor= "gray";
  }

  
  const servingsPerContainer1 = parseInt(document.getElementById("result-servingsPerContainer").textContent);
  const servingsPerContainer2 = parseInt(document.getElementById("result2-servingsPerContainer").textContent);
  if (servingsPerContainer1 > servingsPerContainer2) {
    document.getElementById("result-servingsPerContainer").style.backgroundColor= "green";
    document.getElementById("result2-servingsPerContainer").style.backgroundColor= "red";
  } else if(servingsPerContainer1 < servingsPerContainer2) {
    document.getElementById("result-servingsPerContainer").style.backgroundColor= "red";
    document.getElementById("result2-servingsPerContainer").style.backgroundColor= "green";
  } else {
    document.getElementById("result-servingsPerContainer").style.backgroundColor= "gray";
    document.getElementById("result2-servingsPerContainer").style.backgroundColor= "gray";
  }

  const pricePer100gProtein1 = parseInt(document.getElementById("result-pricePer100gProtein").textContent);
  const pricePer100gProtein2 = parseInt(document.getElementById("result2-pricePer100gProtein").textContent);
  if (pricePer100gProtein1 > pricePer100gProtein2) {
    document.getElementById("result-pricePer100gProtein").style.backgroundColor= "green";
    document.getElementById("result2-pricePer100gProtein").style.backgroundColor= "red";
  } else if(pricePer100gProtein1 < pricePer100gProtein2) {
    document.getElementById("result-pricePer100gProtein").style.backgroundColor= "red";
    document.getElementById("result2-pricePer100gProtein").style.backgroundColor= "green";
  } else {
    document.getElementById("result-pricePer100gProtein").style.backgroundColor= "gray";
    document.getElementById("result2-pricePer100gProtein").style.backgroundColor= "gray";
  }

  const fatPer100gProtein1 = parseInt(document.getElementById("result-fatPer100gProtein").textContent);
  const fatPer100gProtein2 = parseInt(document.getElementById("result2-fatPer100gProtein").textContent);
  if (fatPer100gProtein1 < fatPer100gProtein2) {
    document.getElementById("result-fatPer100gProtein").style.backgroundColor= "green";
    document.getElementById("result2-fatPer100gProtein").style.backgroundColor= "red";
  } else if(fatPer100gProtein1 > fatPer100gProtein2) {
    document.getElementById("result-fatPer100gProtein").style.backgroundColor= "red";
    document.getElementById("result2-fatPer100gProtein").style.backgroundColor= "green";
  } else {
    document.getElementById("result-fatPer100gProtein").style.backgroundColor= "gray";
    document.getElementById("result2-fatPer100gProtein").style.backgroundColor= "gray";
  }

  const carbsPer100gProtein1 = parseInt(document.getElementById("result-carbsPer100gProtein").textContent);
  const carbsPer100gProtein2 = parseInt(document.getElementById("result2-carbsPer100gProtein").textContent);
  if (carbsPer100gProtein1 < carbsPer100gProtein2) {
    document.getElementById("result-carbsPer100gProtein").style.backgroundColor= "green";
    document.getElementById("result2-carbsPer100gProtein").style.backgroundColor= "red";
  } else if(carbsPer100gProtein1 > carbsPer100gProtein2) {
    document.getElementById("result-carbsPer100gProtein").style.backgroundColor= "red";
    document.getElementById("result2-carbsPer100gProtein").style.backgroundColor= "green";
  } else {
    document.getElementById("result-carbsPer100gProtein").style.backgroundColor= "gray";
    document.getElementById("result2-carbsPer100gProtein").style.backgroundColor= "gray";
  }
}