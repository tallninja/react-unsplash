import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID U828CisMJZFPugbLdHPwC6HjOe9qlJANMwffNT-tICo",
  },
});
