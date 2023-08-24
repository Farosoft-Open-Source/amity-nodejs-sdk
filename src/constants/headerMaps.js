/**
 * Header map for supported headers
 * @param {string} - Takes simple param for this map
 * @returns {string} - Available header
 */
const HEADERTYPES = new Map([
  ['BEARER', 'Authorization'],
  ['APIKEY', 'X-API-KEY'],
  ['XSERVERKEY', 'x-server-key'],
])

export default HEADERTYPES
