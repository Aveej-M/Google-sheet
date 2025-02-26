Google Sheets Clone

This project is a Google Sheets clone built using HTML, CSS, and JavaScript. It allows users to create, edit, format, and manipulate data in a spreadsheet-like interface, with additional functionalities such as data validation, mathematical operations, and data visualization (charts).

Features
1. Text Formatting
Bold: Toggle bold text for the selected cell.
Italic: Toggle italic text for the selected cell.
Font Size: Change the font size of the selected cell.
Color: Change the text color of the selected cell (supports color names like "red", "blue").
2. Mathematical Functions
SUM: Calculates the sum of a range of cells.
AVERAGE: Calculates the average of a range of cells.
MAX: Finds the maximum value from a range of cells.
MIN: Finds the minimum value from a range of cells.
COUNT: Counts the number of cells containing numeric values in a range.
3. Data Quality Functions
TRIM: Removes leading and trailing whitespace from a cell.
UPPER: Converts text in a cell to uppercase.
LOWER: Converts text in a cell to lowercase.
REMOVE_DUPLICATES: Removes duplicate values from the selected range of cells.
FIND_AND_REPLACE: Allows users to find and replace specific text within a range of cells.
4. Save and Load Functionality
Save: Saves the current spreadsheet to the browser’s local storage.
Load: Loads the saved spreadsheet from local storage.
5. Charts and Graphs
Create Chart: Generate bar charts based on the numeric data selected in the cells.



Installation
1. Clone the repository
   
bash
Copy

git clone https://github.com/yourusername/google-sheets-clone.git

cd google-sheets-clone

3. Open the index.html file
   
After cloning the repository, you can open the index.html file directly in a web browser (Google Chrome, Firefox, etc.).

bash
Copy

open index.html  # For macOS
start index.html # For Windows

3. Required Dependencies
This project uses Chart.js for charting and localStorage for saving and loading data.


Chart.js is included via a CDN link in the index.html file, so there’s no need to install it manually.
Usage

Basic Operations

Edit Cells: Click any cell to select it. Type in a value (number, text, or date).

Formatting: Select a cell and click the buttons for Bold, Italic, Font Size, or Color to modify the text style.

Formulas: Type formulas starting with = (e.g., =A1+B2) to perform calculations using cell references.

Data Quality Functions: Select a cell or range of cells and use the provided buttons to apply functions like TRIM, UPPER, LOWER, etc.

Mathematical Functions: Use the SUM, AVERAGE, MAX, MIN, and COUNT buttons to apply mathematical operations over a range of cells.

Save and Load: Use the Save and Load buttons to store or retrieve the spreadsheet data from the browser’s local storage.

Create Chart

Select Cells: Highlight a range of cells containing numeric values.

Click the "Create Chart" button to generate a bar chart based on the selected cells' data.

Example
To calculate the sum of cells A1 to A3, click the SUM button after selecting these cells.

To remove leading/trailing spaces in cell B1, select the cell and click the TRIM button.

Project Structure

index.html: The main HTML file containing the structure of the app.

styles.css: The stylesheet to style the spreadsheet and toolbar.

scripts.js: Contains the JavaScript logic for functionality (formulas, data validation, chart creation, etc.).

README.md: This file with project details.

7. Formula Support
Relative and Absolute References: Supports basic mathematical formulas using cell references (e.g., =A1 + B2).
Formula Evaluation: Automatically evaluates formulas in the cells and updates the result.
8. Data Entry and Validation
Users can input numbers, text, and dates in the cells.
Basic data validation to ensure cells contain valid numeric values when performing mathematical operations.
