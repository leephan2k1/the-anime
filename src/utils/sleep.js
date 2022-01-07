const sleep = (delay) => {
  let start = new Date().getTime();
  while (new Date().getTime() < start + delay);
};
export default sleep;
