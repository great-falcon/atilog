const startId = 1;
const numberOfRequests = 100;
const url = "https://jsonplaceholder.typicode.com/posts/";
const parallelRequests = 5;

function sendLargeNumberOfRequests(
  id,
  numberOfRequests,
  url,
  parallelRequests
) {
  for (let i = 0; i < numberOfRequests / parallelRequests; i++) {
    const promises = [];
    for (let i = 0; i < parallelRequests; i++) {
      const promise = fetch(`${url}${id}`).then(resp => resp.text());
      id++;
      promises.push(promise);
    }
    Promise.all(promises).then(texts => {
      console.log(texts);
    });
  }
}

sendLargeNumberOfRequests(startId, numberOfRequests, url, parallelRequests);
