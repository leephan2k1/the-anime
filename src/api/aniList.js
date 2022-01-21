import axiosClient from "./axiosClient";

const aniList = {
  getSlide: () => {
    const url = "/slide";
    return axiosClient.get(url);
  },
  getList: (params) => {
    const url = `/search?q=${params}`;
    return axiosClient.get(url);
  },

  getRecently: () => {
    const url = `/recently`;
    return axiosClient.get(url);
  },

  getRecommended: () => {
    const url = `/recommended`;
    return axiosClient.get(url);
  },
};

export default aniList;
