import axios from "axios"
import config from "./config"
import store from "@store"

const defaults = (config) => ({ ...config, ...{ auth: store.getters.auth } })

export default (url) => {
  const service = axios.create(config)

  return {
    request(config) {
      return service.request(defaults(config))
    },
    get(config) {
      return service.get(url, defaults(config))
    },
    delete(config) {
      return service.delete(url, defaults(config))
    },
    head(config) {
      return service.head(url, defaults(config))
    },
    options(config) {
      return service.options(url, defaults(config))
    },
    post(data, config) {
      return service.post(url, data, defaults(config))
    },
    put(data, config) {
      return service.put(url, data, defaults(config))
    },
    patch(data, config) {
      return service.patch(url, data, defaults(config))
    }
  }
}
