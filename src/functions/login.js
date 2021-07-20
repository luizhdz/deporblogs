import { getStorage } from "./storage"

export const loggedIn = () => {
  const existToken = getStorage({name: "token"})
  return existToken
}