function _format(date, fmt) {
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) { // 年
    fmt = fmt.replace(RegExp.$1,
      date.getFullYear() + '').substr(4 - RegExp.$1.length)
  }
  for (const k of Object.getOwnPropertyNames(o)) {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1,
        RegExp.$1.length === 1
          ? o[k]
          : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt
}

export function formatDate(date, fmt = 'yyyy-MM-dd hh:ss') {
  if (!date) return ''
  if (Object.prototype.toString.call(date) === '[object String]') {
    return date
  }
  if (Object.prototype.toString.call(date) === '[object Number]') {
    const newDate = new Date()
    newDate.setTime(date)
    date = newDate
  }
  return _format(date, fmt)
}
