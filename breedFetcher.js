const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    //request failed, AKA error !== null
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body); 

      if (data.length < 1) { //data is []

        error = "The specified breed does not exist";
        callback(error, null)
      } else {
        const desc = data[0].description; //No errors
        callback(error, desc);
      }
    }

  });
};



module.exports = { fetchBreedDescription };