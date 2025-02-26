// Get the toolbar buttons
const boldButton = document.getElementById('bold-button');
const italicButton = document.getElementById('italic-button');
const fontSizeButton = document.getElementById('fontSize-button');
const colorButton = document.getElementById('color-button');
const sumButton = document.getElementById('sum-button');
const averageButton = document.getElementById('average-button');
const maxButton = document.getElementById('max-button');
const minButton = document.getElementById('min-button');
const countButton = document.getElementById('count-button');
const trimButton = document.getElementById('trim-button');
const upperButton = document.getElementById('upper-button');
const lowerButton = document.getElementById('lower-button');
const removeDuplicatesButton = document.getElementById('remove-duplicates-button');
const findAndReplaceButton = document.getElementById('find-replace-button');

// To track the selected cells
let selectedCells = [];

// Add event listeners to the toolbar buttons

boldButton.addEventListener('click', () => {
  selectedCells.forEach(cell => {
    cell.style.fontWeight = cell.style.fontWeight === 'bold' ? 'normal' : 'bold';
  });
});

italicButton.addEventListener('click', () => {
  selectedCells.forEach(cell => {
    cell.style.fontStyle = cell.style.fontStyle === 'italic' ? 'normal' : 'italic';
  });
});

fontSizeButton.addEventListener('click', () => {
  selectedCells.forEach(cell => {
    const newFontSize = prompt('Enter a new font size (e.g., 12, 14, 16):');
    if (newFontSize) {
      cell.style.fontSize = `${newFontSize}px`;
    }
  });
});

colorButton.addEventListener('click', () => {
  selectedCells.forEach(cell => {
    const newColor = prompt('Enter a new color (e.g., red, blue, green):');
    if (newColor) {
      cell.style.color = newColor; // Using color names instead of hex codes
    }
  });
});

// Data quality function event listeners (only affect selected cells)
trimButton.addEventListener('click', () => {
  selectedCells.forEach(cell => {
    cell.textContent = cell.textContent.trim();  // Trim leading/trailing spaces
  });
});

upperButton.addEventListener('click', () => {
  selectedCells.forEach(cell => {
    // Convert only the selected cell to uppercase
    cell.textContent = cell.textContent.toUpperCase();  // Convert to uppercase
  });
});

lowerButton.addEventListener('click', () => {
  selectedCells.forEach(cell => {
    // Convert only the selected cell to lowercase
    cell.textContent = cell.textContent.toLowerCase();  // Convert to lowercase
  });
});

removeDuplicatesButton.addEventListener('click', () => {
  const uniqueValues = [...new Set(selectedCells.map(cell => cell.textContent))];  // Get unique values
  selectedCells.forEach((cell, index) => {
    if (index < uniqueValues.length) {
      cell.textContent = uniqueValues[index];  // Update cell with unique value
    } else {
      cell.textContent = '';  // Clear remaining cells
    }
  });
});

findAndReplaceButton.addEventListener('click', () => {
  const findText = prompt('Enter the text you want to find:');
  const replaceText = prompt('Enter the text you want to replace with:');

  selectedCells.forEach(cell => {
    if (cell.textContent.includes(findText)) {
      cell.textContent = cell.textContent.replace(new RegExp(findText, 'g'), replaceText);  // Replace text
    }
  });
});

// Mathematical function event listeners (same as before, only if cells are selected)
sumButton.addEventListener('click', () => {
  if (selectedCells.length > 0) {
    const sum = selectedCells.reduce((acc, cell) => acc + (parseFloat(cell.textContent) || 0), 0);
    alert(`SUM: ${sum}`);
  } else {
    alert('No cells selected');
  }
});

averageButton.addEventListener('click', () => {
  if (selectedCells.length > 0) {
    const sum = selectedCells.reduce((acc, cell) => acc + (parseFloat(cell.textContent) || 0), 0);
    const count = selectedCells.filter(cell => !isNaN(parseFloat(cell.textContent))).length;
    const average = count > 0 ? sum / count : 0;
    alert(`AVERAGE: ${average}`);
  } else {
    alert('No cells selected');
  }
});

maxButton.addEventListener('click', () => {
  if (selectedCells.length > 0) {
    const max = Math.max(...selectedCells.map(cell => parseFloat(cell.textContent) || -Infinity));
    alert(`MAX: ${max}`);
  } else {
    alert('No cells selected');
  }
});

minButton.addEventListener('click', () => {
  if (selectedCells.length > 0) {
    const min = Math.min(...selectedCells.map(cell => parseFloat(cell.textContent) || Infinity));
    alert(`MIN: ${min}`);
  } else {
    alert('No cells selected');
  }
});

countButton.addEventListener('click', () => {
  if (selectedCells.length > 0) {
    const count = selectedCells.filter(cell => !isNaN(parseFloat(cell.textContent))).length;
    alert(`COUNT: ${count}`);
  } else {
    alert('No cells selected');
  }
});

// Add event listeners to the cells to handle cell selection
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    // If the cell is not already selected, add it to the selectedCells array
    if (!selectedCells.includes(cell)) {
      selectedCells.push(cell);
      cell.classList.add('selected');  // Highlight the selected cell
    } else {
      // If the cell is already selected, remove it from the selectedCells array
      selectedCells = selectedCells.filter(selectedCell => selectedCell !== cell);
      cell.classList.remove('selected');
    }
  });

  cell.addEventListener('input', () => {
    const cellValue = cell.textContent;
    console.log(`Cell value updated: ${cellValue}`);
    validateCell(cell);  // Validate cell data on input change
  });
});

// Function to validate cell data based on cell's type (e.g., numeric cells)
function validateCell(cell) {
  const cellValue = cell.textContent.trim();
  
  // Check if the cell is intended to hold numeric values (we assume cells like A1, B1, etc. are numeric)
  if (cell.classList.contains('numeric')) {
    if (isNaN(cellValue) && cellValue !== '') {
      alert('Invalid input! Please enter a valid number.');
      cell.textContent = '';  // Clear invalid input
    }
  } else if (cell.classList.contains('date')) {
    // Validate date input
    const date = new Date(cellValue);
    if (isNaN(date.getTime()) && cellValue !== '') {
      alert('Invalid date! Please enter a valid date.');
      cell.textContent = '';  // Clear invalid input
    }
  }
}

// Function to allow numeric-only input for numeric cells
function makeCellNumeric(cell) {
  cell.classList.add('numeric');  // Mark the cell as numeric
}

// Function to allow date input for date cells
function makeCellDate(cell) {
  cell.classList.add('date');  // Mark the cell as date
}

// Example of making a specific cell numeric or date (call this during cell setup or dynamically)
makeCellNumeric(document.getElementById('cell-A1'));  // Example: Making A1 a numeric cell
makeCellDate(document.getElementById('cell-B1'));  // Example: Making B1 a date cell




// Create a chart based on selected cells' values
function createChart() {
  const values = selectedCells.map(cell => parseFloat(cell.textContent) || 0);
  
  if (values.length > 0) {
    const ctx = document.createElement('canvas');
    document.body.appendChild(ctx);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: selectedCells.map(cell => cell.id),
        datasets: [{
          label: 'Values',
          data: values,
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  } else {
    alert('Please select some cells with numeric data to create a chart.');
  }
}

// Button to trigger chart creation
const chartButton = document.createElement('button');
chartButton.innerText = 'Create Chart';
chartButton.addEventListener('click', createChart);
document.body.appendChild(chartButton);



// Save Spreadsheet to Local Storage
function saveSpreadsheet() {
  const spreadsheetData = {};

  cells.forEach(cell => {
    const cellId = cell.id;
    const cellValue = cell.textContent.trim();
    spreadsheetData[cellId] = cellValue;
  });

  localStorage.setItem('spreadsheetData', JSON.stringify(spreadsheetData));
  alert('Spreadsheet saved!');
}

// Load Spreadsheet from Local Storage
function loadSpreadsheet() {
  const savedData = localStorage.getItem('spreadsheetData');

  if (savedData) {
    const spreadsheetData = JSON.parse(savedData);

    for (const cellId in spreadsheetData) {
      const cell = document.getElementById(cellId);
      if (cell) {
        cell.textContent = spreadsheetData[cellId];
      }
    }

    alert('Spreadsheet loaded!');
  } else {
    alert('No saved data found.');
  }
}

// Add buttons for save/load functionality
const saveButton = document.createElement('button');
saveButton.innerText = 'Save Spreadsheet';
saveButton.addEventListener('click', saveSpreadsheet);
document.body.appendChild(saveButton);

const loadButton = document.createElement('button');
loadButton.innerText = 'Load Spreadsheet';
loadButton.addEventListener('click', loadSpreadsheet);
document.body.appendChild(loadButton);
