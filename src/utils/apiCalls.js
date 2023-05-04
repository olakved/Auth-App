import axios from "axios";

export const postRequest = ({ url, data }) => {
  const response = axios.post(url, data);
  return response || response?.data;
};

export const putRequest = ({ url, data }) => {
  const response = axios.put(url, data);
  return response || response?.data;
};

export const patchRequest = ({ url, data }) => {
  const response = axios.patch(url, data);
  return response || response?.data;
};

export const getRequest = ({ url }) => {
  const response = axios.get(url);
  return response || response?.data;
};

export const deleteRequest = ({ url, data }) => {
  const response = axios.delete(url, { data });
  return response || response?.data;
};
