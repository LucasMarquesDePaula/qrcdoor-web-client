import axios from "axios"
import config from "./config"

export default (url) => {
  const service = axios.create(config)

  return {
    request(config) {
      return service.request(config)
    },
    get(config) {
      return service.get(url, config)
    },
    delete(config) {
      return service.delete(url, config)
    },
    head(config) {
      return service.head(url, config)
    },
    options(config) {
      return service.options(url, config)
    },
    post(data, config) {
      return service.post(url, data, config)
    },
    put(data, config) {
      return service.put(url, data, config)
    },
    patch(data, config) {
      return service.patch(url, data, config)
    }
  }
}
