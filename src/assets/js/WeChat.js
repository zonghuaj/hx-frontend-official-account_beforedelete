export default function JSSDKLoader () {
  return new Promise((resolve, reject) => {
    if (window.wx) {
      resolve(window.wx)
    } else {
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = 'https://res.wx.qq.com/open/js/jweixin-1.4.0.js'
      script.onerror = reject
      document.head.appendChild(script)
      script.onload = () => {
        resolve(window.wx)
      }
    }
  })
}
