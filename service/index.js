const BASE_URL = "http://123.207.32.32:9001"

class XRequest {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        method,
        data: params,
        success: (response) => {
          console.log("response: ", response);
          resolve(response.data);

        },
        fail: (error) => {
          console.log("erorr: ", error);
          reject(error);
        }
      })
    })
  }

  get(url, params) {
    return this.request(url, "GET", params)
  }

  post(url, data) {
    return this.request(url, "POST", data)
  }
}

const http = new XRequest();
export default http;