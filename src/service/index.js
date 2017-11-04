import axios from "axios"

export default axios.create({
  // baseURL: "http://192.168.15.11:8070",
  baseURL: "http://localhost:8070",
  method: "POST",
  // headers: {
  // "X-Custom-Header": "foobar",
  // "Content-Type": "application/x-www-form-urlencoded"
  // },
  timeout: 1000
})
