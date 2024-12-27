async function getGarageData(url: string = '/garage') {
  const path = `http://127.0.0.1:3000${url}`;
  const result = await fetch(path);
  const data = await result.json();
  console.log(data);
}

export default getGarageData;
