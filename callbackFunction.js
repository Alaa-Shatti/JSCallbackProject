// callback function

const sum = (a, b, callback) => {
  callback(a + b);
};

sum(2, 3, (result) => {
  console.log("sonuc = " + result);
});

const split = (str, callback) => {
  const result = str.split(",");
  callback(result);
};

split("a,b", (result) => {
  console.log(result);
});
