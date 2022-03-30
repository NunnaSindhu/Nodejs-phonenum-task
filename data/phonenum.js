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
    console.log(`phone number read successfully ${data}`);
  });
};
//write data into in a new file
let data =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
fs.writeFile("loremdata.txt", data, "utf8",(err)=>{
  if(err) throw err;
  console.log("data added successfully");
});
//read the data from the file
fs.readFile("loremdata.txt", "utf8",(err,data)=>{
  if(err) throw err;
  console.log("data read successfully: "+data);
})
  module.exports = {
 phoneNumber,data
};
