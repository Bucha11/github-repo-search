import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com/",
});

export const dataAPI = {
  getData(name) {
    return instance.get(`orgs/${name}/repos`).then((res) => res.data);
  },
};
