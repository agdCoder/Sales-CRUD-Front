import axios from "axios";

import { show_alert } from "./modalAlert";

export const sendGetRequest = async (url) => {
  try {
    const res = await axios.get(url);
    if (res.status === 200) {
      return res.data;
    } else {
      show_alert(res.data.message, "error");
    }
  } catch (err) {
    if (err?.response?.data?.message) {
      show_alert(err.response.data.message, "error");
    } else {
      show_alert("An error occurred while processing the request", "error");
    }
    console.log(err);
  }
};

export const sendRequest = async (
  reqMethod,
  reqParams,
  reqParam,
  url,
  getData
) => {
  try {
    const req = {
      method: reqMethod,
      url: `${url}/${reqParam}`,
      data: reqParams,
    };
    const res = await axios(req);
    if (res.status >= 200 && res.status <= 299) {
      show_alert(res.data.message, "success");
      document.getElementById("btnClose").click();
      getData();
    } else {
      show_alert(res.data.message, "error");
    }
  } catch (err) {
    if (err?.response?.data?.message) {
      show_alert(err.response.data.message, "error");
    } else {
      show_alert("An error occurred while processing the request", "error");
    }
    console.log(err);
  }
};
