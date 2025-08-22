let shapeSelect = document.getElementById("shape");
let inputsDiv = document.getElementById("inputs");
let resultDiv = document.getElementById("result");

// Show inputs on first load
updateInputs();

// Change inputs when shape changes
shapeSelect.addEventListener("change", updateInputs);

function updateInputs() {
  let shape = shapeSelect.value;
  inputsDiv.innerHTML = "";

  if (shape === "cube") {
    inputsDiv.innerHTML =
      '<input type="number" id="side" placeholder="Enter side length">';
  } else if (shape === "cuboid") {
    inputsDiv.innerHTML =
      '<input type="number" id="length" placeholder="Enter length"><br>' +
      '<input type="number" id="breadth" placeholder="Enter breadth"><br>' +
      '<input type="number" id="height" placeholder="Enter height">';
  } else if (shape === "sphere") {
    inputsDiv.innerHTML =
      '<input type="number" id="radius" placeholder="Enter radius">';
  } else if (shape === "cylinder") {
    inputsDiv.innerHTML =
      '<input type="number" id="radius" placeholder="Enter radius"><br>' +
      '<input type="number" id="height" placeholder="Enter height">';
  }
}

function calculate() {
  let shape = shapeSelect.value;
  let result = "";

  if (shape === "cube") {
    let side = Number(document.getElementById("side").value);
    if (!side) {
      resultDiv.innerHTML = "Please enter side length!";
      return;
    }
    let volume = side ** 3;
    let tsa = 6 * side ** 2;
    let csa = 4 * side ** 2;
    result = `
            Volume of Cube = ${volume.toFixed(2)}<br>
            TSA of Cube = ${tsa.toFixed(2)}<br>
            CSA of Cube = ${csa.toFixed(2)}
        `;
  } else if (shape === "cuboid") {
    let length = Number(document.getElementById("length").value);
    let breadth = Number(document.getElementById("breadth").value);
    let height = Number(document.getElementById("height").value);
    if (!length || !breadth || !height) {
      resultDiv.innerHTML = "Please enter length, breadth, and height!";
      return;
    }
    let volume = length * breadth * height;
    let tsa = 2 * (length * breadth + breadth * height + length * height);
    let csa = 2 * height * (length + breadth);
    result = `
            Volume of Cuboid = ${volume.toFixed(2)}<br>
            TSA of Cuboid = ${tsa.toFixed(2)}<br>
            CSA of Cuboid = ${csa.toFixed(2)}
        `;
  } else if (shape === "sphere") {
    let radius = Number(document.getElementById("radius").value);
    if (!radius) {
      resultDiv.innerHTML = "Please enter radius!";
      return;
    }
    let volume = (4 / 3) * Math.PI * radius ** 3;
    let tsa = 4 * Math.PI * radius ** 2;
    let csa = tsa;
    result = `
            Volume of Sphere = ${volume.toFixed(2)}<br>
            TSA of Sphere = ${tsa.toFixed(2)}<br>
            CSA of Sphere = ${csa.toFixed(2)}
        `;
  } else if (shape === "cylinder") {
    let radius = Number(document.getElementById("radius").value);
    let height = Number(document.getElementById("height").value);
    if (!radius || !height) {
      resultDiv.innerHTML = "Please enter radius and height!";
      return;
    }
    let volume = Math.PI * radius ** 2 * height;
    let tsa = 2 * Math.PI * radius * (radius + height);
    let csa = 2 * Math.PI * radius * height;
    result = `
            Volume of Cylinder = ${volume.toFixed(2)}<br>
            TSA of Cylinder = ${tsa.toFixed(2)}<br>
            CSA of Cylinder = ${csa.toFixed(2)}
        `;
  }

  resultDiv.innerHTML = result;
}
