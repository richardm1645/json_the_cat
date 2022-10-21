const request = require('request');

let searchQuery = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/search?q=' + searchQuery, (error, response, body) => {
  //console.log('statusCode:', response && response.statusCode);

  if (error) {
    console.log(error);
    return;
  }
  
  const data = JSON.parse(body);
  
  if (data[0] === undefined) {
    console.log("The specified breed does not exist");
  } else {
    console.log(data[0].description);
  }

});