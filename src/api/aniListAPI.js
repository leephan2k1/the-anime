import axiosClient from "./axiosClient";

const aniListApi = {
  getRandom: (params) => {
    const url = "/random/anime/";
    return axiosClient.get(url + params);
  },
  // get: (id) => {
  //     const url =`/products/${id}`;
  //     return axiosClient.get(url)
  // };
};
export default aniListApi;
