import axiosClient from "./axiosClient";

const aniList = {
  getSlide: () => {
    const url = "/slide";
    return axiosClient.get(url);
  },
};

export default aniList;
