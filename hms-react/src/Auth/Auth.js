import axios from "axios";

const ROOT_URL = window.location.href.split("/")[2].split(":")[0];
const API_TEST_URL = `http://${ROOT_URL}:8080/api/test/`;

const verifyUser = (payload) => {
  console.log(payload);
  return axios
    .post(API_TEST_URL + "patient", payload)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      if (err.response) {
        return { data: { msg: err.response.data.msg }, status: err.response.status };
      } else {
        return { data: { msg: "Connection Error" }, status: -1 };
      }
    });
};

export { verifyUser };
