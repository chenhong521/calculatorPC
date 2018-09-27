/* eslint-disable */
export default function numFormat (s, n) {
  var t = ''
  var r = ''
  var Str = function () {
    n = n > 0 && n <= 20 ? n : 2
    s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
    var l = s.split('.')[0].split('').reverse()
    r = s.split('.')[1]
    for (var i = 0; i < l.length; i++) {
      t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
    }
  }
  if (n >= 0) {
    Str()
    return t.split('').reverse().join('') + '.' + r
  } else {
    Str()
    return t.split('').reverse().join('')
  }
}