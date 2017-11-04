import * as types from "./mutation-types"

export const login = ({ commit }, auth) => {
  commit(types.LOGIN, auth)
}

export const logout = ({ commit }) => {
  commit(types.LOGOUT)
}
