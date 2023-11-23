function calculateSampleSize() {
    var N = parseFloat(document.getElementById("populationSize").value);
    var confidenceLevel = parseFloat(document.getElementById("confidenceLevel").value);
    var estimatedProportion = parseFloat(document.getElementById("estimatedProportion").value) / 100;
    var marginOfError = parseFloat(document.getElementById("marginOfError").value) / 100;

    var Z = getZValue(confidenceLevel);

    var numerator = N * Math.pow(Z, 2) * estimatedProportion * (1 - estimatedProportion);
    var denominator = (N - 1) * Math.pow(marginOfError, 2) + Math.pow(Z, 2) * estimatedProportion * (1 - estimatedProportion);

    var sampleSize = Math.ceil(numerator / denominator);

    displayResult(sampleSize);
}

function getZValue(confidenceLevel) {
    // Using a lookup table or a statistical library, you can get the Z value for the confidence level.
    // For simplicity, we'll use a common Z value for a 95% confidence level.
    // You may want to extend this function for different confidence levels.
    return 1.96;
}

function displayResult(sampleSize) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Tamaño de muestra necesario: " + sampleSize;
}
