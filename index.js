const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  console.log("error: ", error, "desc: " , desc)
  if (error || desc === []) {
    desc = null;
    console.log('Error fetch details:', error);
  } else {
    console.log('desc: ' , desc);
  }
});