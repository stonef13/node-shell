const fs = require('fs');

const cat = fs.readFile('./cat', 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

module.exports = {
  cat,
};
