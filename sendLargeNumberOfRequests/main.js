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
    let requestsSended = 0;
    (function sendParallelRequests() {
      const promises = [];
      for (let i = 0; i < parallelRequests; i++) {
        const promise = axios.get(`${url}${id}`);
        id++;
        requestsSended++;
        promises.push(promise);
      }
      
      Promise.all(promises).then(texts => {
        console.log(texts);
        if (requestsSended < numberOfRequests) {
          setTimeout(() => {
            sendParallelRequests();
          }, 3000);
        }
      });
    })();
}

sendLargeNumberOfRequests(startId, numberOfRequests, url, parallelRequests);
