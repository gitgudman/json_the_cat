const needle = require('needle');

const breedName = process.argv[2];
if (!breedName) {
  console.log("Please provide a breed name.");
  process.exit();
}

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

needle.get(url, (error, response, body) => {
  if (error) {
    console.log("Request failed:", error.message);
    return;
  }

  console.log(typeof body);
  console.log(body);

  if (body.length === 0) {
    console.log("Not found.");
  } else {
    console.log(body[0].description);
  }
});
