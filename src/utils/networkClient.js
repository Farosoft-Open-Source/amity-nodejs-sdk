import fetch from 'node-fetch'
import HEADERTYPES from '../constants/headerMaps.js'
import REGIONURLS from '../constants/regionUrls.js'

export default {
  /**
   *
   * @param {string} path - Path of API resource
   * @param {string} headerType - Header type in which to create (BEARER, APIKEY, etc)
   * @param {string} headerData - Data to be provided by the header
   * @param {string} method - HTTP Method (GET, POST, DELETE)
   * @param {object} data - JSON data to pass to method, if needed
   * @returns {object} responseData - JSON from call
   */
  async execute(path, headerType, headerData, method, data) {
    const headerKey = HEADERTYPES.get(headerType)
    const url = REGIONURLS[process.env.AMITY_REGION] + path
    const headers = { accept: 'application/json' }
    headers[headerKey] = headerData

    const request = {}
    request['method'] = method

    if (data) {
      request['body'] = data
    }

    request['headers'] = headers
    console.log(JSON.stringify(request))
    console.log(url)

    const response = (await fetch(url, request)).json()
    return response
  },
}
