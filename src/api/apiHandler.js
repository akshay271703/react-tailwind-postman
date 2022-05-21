import axios from 'axios';

const requestHTTP = async (
  method,
  url,
  params = null,
  headers = null,
  data = null
) => {
  return axios({
    method,
    url,
    params,
    headers,
    data,
  });
};

export default requestHTTP;
