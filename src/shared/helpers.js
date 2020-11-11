
// export function saveAuthInfo(authInfo, remember = false) {
//   if (remember)
//     return localStorage.setItem(
//       "auth",
//       JSON.stringify({
//         ...authInfo
//       })
//     )
//   return sessionStorage.setItem(
//     "auth",
//     JSON.stringify({
//       ...authInfo
//     })
//   )
// }


// export function getAuthInfo() {
//   const authInfo =
//     sessionStorage.getItem("auth") || localStorage.getItem("auth")
//   return authInfo ? JSON.parse(authInfo) : authInfo
// }

export function getAuthInfo() {
      const authInfo = localStorage.getItem("auth")
      return authInfo ? JSON.parse(authInfo) : authInfo
    }
    