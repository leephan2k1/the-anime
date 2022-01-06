function getListYears(start = 2022, count = 1) {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(start--);
  }
  return arr;
}

export default getListYears;
