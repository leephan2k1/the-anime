import axiosClient from "./axiosClient";

const ani = {
  getDetails: (params) => {
    const url = `/anime/${params}`;
    return axiosClient.get(url);
  },
};

export default ani;
