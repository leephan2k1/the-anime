import axiosClient from "./axiosClient";

const ani = {
  getDetails: (params) => {
    const url = `/anime/${params}`;
    return axiosClient.get(url);
  },

  getEpisode: (params) => {
    const url = `/anime/${params.id}/episodes/${params.index}`;
    return axiosClient.get(url);
  },
};

export default ani;
