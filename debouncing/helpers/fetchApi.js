async function fetchApi(URL) {
  try {
    const result = await fetch(URL);
    return result.json();
  } catch (error) {
    console.log(error);
  }
}

export default fetchApi;
