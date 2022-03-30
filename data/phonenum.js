const fs = require("fs");
//Functionality to generate randon phone number with series 9413
let phoneNumber = () => {
  let numbers = [];
  for (let i = 0; i < 1; i++) {
    let number = "9413";
    let random = Math.floor(Math.random() * 1000000);
    number = number + random;
    if (number.length === 10) {
      numbers.push(number);
    }
    storeData("phone.txt", `${numbers}`);
    readData("phone.txt", numbers);
  }
};
//To write the data into files
let storeData = (filename, data) => {
  data = `${data}\n`;
  fs.appendFile(filename, data, "utf-8", (err) => {
    if (err) throw err;
    console.log(`phone number added successfully`);
    console.log(__dirname);
    console.log(__filename);
  });
};

//read data from fs

let readData = (filename, data) => {
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) throw err;
    // fs.writeFile(filename, data, "utf-8", (err) => {
    //   if (err) throw err;
      console.log(`phone number read successfully ${data}`);
    // });

    
  });
};
module.exports = {
  phoneNumber,
};
