

export function getAuthInfo() {
      const authInfo = localStorage.getItem("auth")
      return authInfo ? JSON.parse(authInfo) : authInfo
    }

export function getUserInfo() {
      return JSON.parse(localStorage.getItem("userInfo"))
    }
    

