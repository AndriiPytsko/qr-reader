import axios from "axios";

const API_URL = "http://206.189.25.39:8000";

class ServiceProduct {
  async getProductImage(code) {
    const res = await axios.get(`${API_URL}/product/images/${code}/`);
    return res.data.data;
  }

  async getProductInfo(code) {
    const res = await axios.get(`${API_URL}/product/${code}/`);
    return res.data.data;
  }

  async sendBasket(data) {
    const res = await axios.post(`${API_URL}/send/`, data);
    return res.data;
  }
}

const apiProduct = new ServiceProduct();

export { apiProduct };
