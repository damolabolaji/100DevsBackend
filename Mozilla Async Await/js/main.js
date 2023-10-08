[
  {
    name: "baked beans",
    price: 0.4,
    image: "beans.jpg",
    type: "vegetables",
  },
  {
    name: "hot dogs",
    price: 1.99,
    image: "hotdogs.jpg",
    type: "meat",
  },
  {
    name: "spam",
    price: 2.85,
    image: "spam.jpg",
    type: "meat",
  },
  {
    name: "refried beans",
    price: 0.99,
    image: "refried.jpg",
    type: "vegetables",
  },
  {
    name: "kidney beans",
    price: 0.58,
    image: "kidney.jpg",
    type: "vegetables",
  },
  {
    name: "garden peas",
    price: 0.52,
    image: "gardenpeas.jpg",
    type: "vegetables",
  },
  {
    name: "mushy peas",
    price: 0.58,
    image: "mushypeas.jpg",
    type: "vegetables",
  },
  {
    name: "corned beef",
    price: 2.39,
    image: "cornedbeef.jpg",
    type: "meat",
  },
  {
    name: "tomato soup",
    price: 1.4,
    image: "tomatosoup.jpg",
    type: "soup",
  },
  {
    name: "chopped tomatoes",
    price: 0.45,
    image: "tomato.jpg",
    type: "vegetables",
  },
  {
    name: "chicken noodle soup",
    price: 1.89,
    image: "chickennoodle.jpg",
    type: "soup",
  },
  {
    name: "carrot and coriander soup",
    price: 1.49,
    image: "carrotcoriander.jpg",
    type: "soup",
  },
];

//USING fETCH API()
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise);

// passing a handler function into the Promise's then() method.
// When(and if) the fetch operation succeeds, the promise will call our handler,
//   passing in a Response object, which contains the server's response.
fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");

//CHAINING PROMISES
const getPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
console.log(getPromise);

// With the fetch() API, once you get a Response object, you need to call another function to get the response data.
// In this case, we want to get the response data as JSON, so we would call the json() method of the Response object.
// It turns out that json() is also asynchronous.So this is a case where we have to call two successive asynchronous functions.
getPromise.then((response) => {
  const jsonObject = response.json();
  jsonObject.then((data) => {
    console.log(data[0].name); //will log 'baked beans'
  });
});

// But the elegant feature of promises is that then() itself returns a promise,
//   which will be completed with the result of the function passed to it.
//   This means that we can(and certainly should) rewrite the above code like this:
const getPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

getPromise2
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });

// We need to check that the server accepted and was able to handle
// the request, before we try to read it

const getPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

getPromise3
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => console.error(`could not get response: ${error}`));

//To support error handling, Promise objects provide a catch() method.
//This is a lot like then(): you call it and pass in a handler function.
//However, while the handler passed to then() is called when the asynchronous
//operation succeeds, the handler passed to catch () is called when the asynchronous operation fails.

//COMBINING MULTIPLE PROMISES
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.log(`could not get response: ${error}`);
  });
//in this way, its all or nthing. That is, the promise.all throws an error if one of the promises is rejected
//this does not include a 404 status response


//PROMISE.ANY()
// Sometimes, you might need any one of a set of promises to be fulfilled, and don
// 't care which one. In that case, you want Promise.any(). This is like Promise.all(),
// except that it is fulfilled as soon as any of the array of promises is fulfilled,
//   or rejected if all of them are rejected:

const fetchPromise4 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise5 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise6 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((response) => {
    console.log(`${response.url}: ${response.status}`);
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
