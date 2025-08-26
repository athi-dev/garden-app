function getAdviceByMonth(month) {
    switch (month) {
      case "March": return "Time to start planting cool-season crops.";
      case "July": return "Water frequently and mulch to retain moisture.";
      case "October": return "Prepare your soil for winter.";
      default: return "General gardening advice: Keep your plants healthy!";
    }
  }
  
  const month = "August";
  console.log(getAdviceByMonth(month));
  