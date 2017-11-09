import conf, { baseURL } from "./conf"
import assignIn from "lodash/assignIn"
import axios from "axios"

export default axios.create(
  assignIn({}, conf, {
    baseURL: `${baseURL}/pessoas`
  })
)
