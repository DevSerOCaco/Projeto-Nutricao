 document.getElementById("calculator-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    const brand = document.getElementById("brand").value;
    const price = parseFloat(document.getElementById("price").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const servingSize = parseFloat(document.getElementById("serving-size").value);
    const kcal = parseFloat(document.getElementById("kcal").value);
    const protein = parseFloat(document.getElementById("protein").value);
    const carbs = parseFloat(document.getElementById("carbs").value);
    const fat = parseFloat(document.getElementById("fat").value);
    
    // Perform calculations
    const percentOf100g = (100 / weight) * 100;
    const proteinPercentage = ((protein / servingSize) * 100).toFixed(2);
    const pricePerServing = (price / servingSize).toFixed(2);
    const servingsPerContainer = Math.floor(weight / servingSize);
    const pricePer100gProtein = ((percentOf100g * 100 ) / proteinPercentage).toFixed(2);
    const fatPer100gProtein = ((fat / protein) * 100).toFixed(2);
    const carbsPer100gProtein = ((carbs / protein) * 100).toFixed(2);

    // Display results
    const resultHTML = `
      <h3>Resultado:</h3>
      <p><strong>Marca:</strong> ${brand}</p>
      <p><strong>Porcentagem de Proteína:</strong> ${proteinPercentage}%</p>
      <p><strong>Preço por Dose Recomendada:</strong> R$ ${pricePerServing}</p>
      <p><strong>Doses Recomendadas por Embalagem:</strong> ${servingsPerContainer}</p>
      <p><strong>Preço por 100g de Proteína:</strong> R$ ${pricePer100gProtein}</p>
      <p><strong>Gordura por 100g de Proteína:</strong> ${fatPer100gProtein}g</p>
      <p><strong>Carboidrato por 100g de Proteína:</strong> ${carbsPer100gProtein}g</p>
    `;

    document.getElementById("result").innerHTML = resultHTML;
  });

  