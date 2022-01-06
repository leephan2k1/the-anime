import { getListYears } from "../../utils";

const yearsFilter = {
  title: "Năm",
  data: ["Tất cả", ...getListYears(new Date().getFullYear(), 20)],
};
const seasonsFilter = {
  title: "Mùa",
  data: ["Tất cả", "Mùa Xuân", "Mùa Hạ", "Mùa Thu", "Mùa Đông"],
};
const genresFilter = {
  title: "Thể loại",
  data: [
    "Tất cả",
    "Action",
    "Adventure",
    "Comedy",
    "Ecchi",
    "Fantasy",
    "Horror",
    "Isekai",
    "Music",
    "Romance",
    "Slice Of Life",
    "Sports",
    "Yuri",
    "Harem",
    "Body Horror",
    "Cannibalism",
    "Chibi",
    "Cosmic Horror",
    "Crime",
    "Shounen",
    "Bar",
    "Circus",
    "College",
    "Dungeon",
    "Foreign",
    "Language Barrier",
    "Outdoor",
    "Rural",
    "School",
    "Maids",
    "Mermaid",
    "Monster Girl",
    "Nekomimi",
    "Ninja",
  ],
};
const stateFilter = {
  title: "Trạng thái",
  data: ["Tất cả", "FINISHED", "RELEASING", "NOT_YET_RELEASED", "CANCELLED"],
};
const formatFilter = {
  title: "Định dạng",
  data: ["Tất cả", "TV", "TV_SHORT", "MOVIE", "SPECIAL", "OVA", "ONA", "MUSIC"],
};
const sortFilter = {
  title: "Sắp xếp",
  data: ["default", "score"],
};

const data = [
  yearsFilter,
  seasonsFilter,
  genresFilter,
  stateFilter,
  formatFilter,
  sortFilter,
];
export default data;
