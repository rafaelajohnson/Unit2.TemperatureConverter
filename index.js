// Convert Fahrenheit to Celsius
function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
  }
  
  // Describe how the temperature feels in Celsius
  function describeTemperature(fahrenheit) {
    const celsius = convertToCelsius(fahrenheit);
  
    if (celsius < 0) {
      return "very cold";
    } else if (celsius < 20) {
      return "cold";
    } else if (celsius < 30) {
      return "warm";
    } else if (celsius < 40) {
      return "hot";
    } else {
      return "very hot";
    }
  }
  
  // Prompt the user
  const input = prompt("Enter a temperature in Fahrenheit:");
  
  // Convert input to number
  const fahrenheit = parseFloat(input);
  
  // Only run if input is valid
  if (!isNaN(fahrenheit)) {
    const celsius = convertToCelsius(fahrenheit);
    const description = describeTemperature(fahrenheit);
  
    alert(
      `That's about ${celsius.toFixed(2)}°C, which feels ${description}.`
    );
  } else {
    alert("Please enter a valid number.");
  }
  