function reverseString(str) {
  let arrayNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  let joinStr = ""
  let strRev = ""
  let tempNumber = ""
  for (let i = str.length - 1; i >= 0; i--) {
    if(arrayNumber.includes(str[i]) === true) {
      tempNumber += str[i];
    } else {
      strRev += str[i];
    }
  }
  joinStr = strRev + tempNumber;
  console.log(joinStr);
}

function longestSentence(txt) {
  let splittedSentence = txt.split(" ")
  let result = splittedSentence[0]
  splittedSentence.forEach((text, index) => {
    if(splittedSentence.length !== index+1) {
      if(splittedSentence[index+1].length < result.length) {
        result = result
      } else {
        result = splittedSentence[index+1]
      }
    } else {
      if(splittedSentence[index-1].length < result.length) {
        result = result
      } else {
        result = splittedSentence[index-1]
      }
    }
  })
  console.log(result)
}

function wordMatches(inputs, queries) {
  let output = [];
  let count = 0;
  queries.forEach((query, queryIndex) => {
    inputs.forEach((input, inputIndex) => {
      if (query === input) {
        count = count + 1;
      }
    })
    output.push(count)
    count = 0;
  });
  console.log(output)
}

function matrixSubtraction(matrix) {
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  let row = matrix.length;
  if (checkColumn(matrix, row) === true ) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < row; j++) {
        if (i == j)
        firstDiagonal += matrix[i][j];
  
        if ((i + j) == (row - 1))
        secondDiagonal += matrix[i][j];
      }
    }
    let result = firstDiagonal + secondDiagonal;
    console.log(result)
  }
}

function checkColumn(matrix, row) {
  let checked = true;
  matrix.forEach((column, index) => {
    if (row !== column.length) {
      checked = false;
      return console.log(`Kolom pada baris ke-${index+1} memiliki jumlah kolom yang tidak sama`);
    }
  })
  return checked;
}

// Function call
console.log("=== JAWABAN 1 ===");
reverseString("NEGIE1");

console.log("\n=== JAWABAN 2 ===");
longestSentence("Saya sangat senang mengerjakan soal algoritma");

console.log("\n=== JAWABAN 3 ===");
let input = ['xc', 'dz', 'bbb', 'dz'];
let query = ['bbb', 'ac', 'dz'];
wordMatches(input, query);

console.log("\n=== JAWABAN 4 ===");
let matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
matrixSubtraction(matrix);