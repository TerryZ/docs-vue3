export function resultText (region) {
  if (!region || !Object.keys(region).length) return '无数据'

  if (!Object.values(region).some(val => val) || !region) {
    return '无数据'
  }
  
  return Object.values(region)
    .filter(val => val)
    .map(val => val.value)
    .join(',')
}