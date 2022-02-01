import fetch from "node-fetch";

function errorsHandler(error) {
  throw new Error(error.mesage);
}

async function checkStatus(urlsArr) {
  try {
    const statusArr = await Promise.all(
      urlsArr.map(async (url) => {
        const res = await fetch(url);
        return `${res.status} - ${res.statusText}`;
      })
    );
    return statusArr;
  } catch (error) {
    errorsHandler(errors);
  }
}

function makeURLsArr(links) {
  return links.map((linkObject) => {
    return Object.values(linkObject).join();
  });
}

async function validateURLs(links) {
  const linksArr = makeURLsArr(links);
  const statusLinks = await checkStatus(linksArr);
  const results = links.map((obj, index) => {
    return { ...obj, status: statusLinks[index] };
  });
  return results;
}

export default validateURLs;
