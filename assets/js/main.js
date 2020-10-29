function calculateTax() {
  event.preventDefault()
  let taxYear = parseInt(document.getElementById("year").value);
  let assessmentType = document.querySelector(
    "input[name=assessment-type]:checked"
  ).value;
  let taxableIncome = parseInt(document.getElementById("profit").value);
  let kirchensteuerRate = parseInt(document.getElementById("k-steuer").value);
  let taxLiability;
  let soli;
  let kirchensteuer;

  if (assessmentType === "couple") {
    taxableIncome /= 2;
  }

  switch (taxYear) {
    case 2020: {
      if (taxableIncome <= 9408) {
        taxLiability = 0;
      } else if (taxableIncome >= 9409 && taxableIncome <= 14532) {
        let y = (taxableIncome - 9408) / 10000;
        taxLiability = (972.87 * y + 1400) * y;
      } else if (taxableIncome >= 14533 && taxableIncome <= 57051) {
        let z = (taxableIncome - 14532) / 10000;
        taxLiability = (212.02 * z + 2397) * z + 972.79;
      } else if (taxableIncome >= 57052 && taxableIncome <= 270500) {
        taxLiability = 0.42 * taxableIncome - 8963.74;
      } else if (taxableIncome >= 270501) {
        taxLiability = 0.45 * taxableIncome - 17078.74;
      }
      break;
    }
    case 2019: {
      if (taxableIncome <= 9168) {
        taxLiability = 0;
      } else if (taxableIncome >= 9169 && taxableIncome <= 14254) {
        let y = (taxableIncome - 9168) / 10000;
        taxLiability = (980.14 * y + 1400) * y;
      } else if (taxableIncome >= 14255 && taxableIncome <= 55960) {
        let z = (taxableIncome - 14254) / 10000;
        taxLiability = (216.06 * z + 2397) * z + 965.58;
      } else if (taxableIncome >= 55961 && taxableIncome <= 265326) {
        taxLiability = 0.42 * taxableIncome - 8780.9;
      } else if (taxableIncome >= 265327) {
        taxLiability = 0.45 * taxableIncome - 16740.68;
      }
      break;
    }
    case 2018: {
      if (taxableIncome <= 9000) {
        taxLiability = 0;
      } else if (taxableIncome >= 9001 && taxableIncome <= 13996) {
        let y = (taxableIncome - 9000) / 10000;
        taxLiability = (997.8 * y + 1400) * y;
      } else if (taxableIncome >= 13997 && taxableIncome <= 54949) {
        let z = (taxableIncome - 13996) / 10000;
        taxLiability = (220.13 * z + 2397) * z + 948.49;
      } else if (taxableIncome >= 54950 && taxableIncome <= 260532) {
        taxLiability = 0.42 * taxableIncome - 8621.75;
      } else if (taxableIncome >= 260553) {
        taxLiability = 0.45 * taxableIncome - 16437.7;
      }
      break;
    }
  }
  // Zusammenveranlagung, Soli und KSt.
  if (assessmentType === "couple") {
    taxLiability *= 2;
  }

  soli = taxLiability * 0.055;
  kirchensteuer = taxLiability * (kirchensteuerRate / 100);

  // Output
  document.getElementById("result").innerHTML = "€ " + taxLiability.toFixed(0)
  document.getElementById("soli").innerHTML = "€ " + soli.toFixed(0)
  document.getElementById("kirche").innerHTML = "€ " + kirchensteuer.toFixed(0)
}
