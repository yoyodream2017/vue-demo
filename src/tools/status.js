/**
 * Code status
 * @param res returned response
 * @param fn callback
 */
export default {
  install (Vue, options) {
    Vue.prototype.$status = function (res, fn, that) {
      if (!res) {
        alert('No data')
        return
      }
      if (res.status) {
        switch (res.status) {
          case 500:
            alert('Web server error')
            break
          case 401:
            alert('No access')
            break
          case 40317:
            alert('Time out')
            break
          case 404:
            alert('No resource')
            break
          case 200:
            typeof fn === 'function' && fn(that)
            break
          default:
            if (res.data) {
              let err = res.data.message
              if (err) {
                alert(err)
              } else {
                alert('Unknown error')
              }
            } else {
              alert('Unknown error')
            }
        }
      } else {
        if (res.data) {
          let err = res.data.message
          if (err) {
            alert(err)
          } else {
            alert('Unknown error')
          }
        } else {
          alert('Unknown error')
        }
      }
    }
  }
}
