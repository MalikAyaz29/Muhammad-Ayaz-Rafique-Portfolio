// ================= Calculator =================
function calculate() {
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);
  const op = document.getElementById("op").value;

  let result;

  if (isNaN(n1) || isNaN(n2)) {
    result = "Invalid input";
  } else {
    switch (op) {
      case "+": result = n1 + n2; break;
      case "-": result = n1 - n2; break;
      case "*": result = n1 * n2; break;
      case "/": result = n2 === 0 ? "Divide by zero" : n1 / n2; break;
      default: result = "Invalid operator";
    }
  }

  document.getElementById("calcResult").innerText = result;
}

// ================= Sort =================
function sortNumbers() {
  const input = document.getElementById("sortInput").value;

  if (!input) {
    document.getElementById("sortResult").innerText = "Invalid input";
    return;
  }

  const result = input
    .split(",")
    .map(Number)
    .sort((a, b) => a - b)
    .join(",");

  document.getElementById("sortResult").innerText = result;
}

// ================= Search =================
function searchNumber() {
  const dataInput = document.getElementById("searchData").value;
  const target = Number(document.getElementById("searchTarget").value);

  if (!dataInput) {
    document.getElementById("searchResult").innerText = "Invalid input";
    return;
  }

  const arr = dataInput.split(",").map(Number);
  const index = arr.indexOf(target);

  document.getElementById("searchResult").innerText =
    index === -1 ? "Not Found" : `Found at index ${index}`;
}
