import axios from 'axios'
import { accessTimeProxy, cacheProxy } from './proxy'

function resHandler(res) {
  const resData = res.data || {}
  if (resData.result?.code === 0) {
    return Promise.resolve(resData.data || {})
  }
  return Promise.reject(resData.result)
}
async function ajaxRequest(url: string, data: any, ajaxFunc: (url: string, params: any) => Promise<any>) {
  try {
    const result = await ajaxFunc(url, data)
    return resHandler(result)
  } catch (err) {
    throw new Error('request failed')
  }
}

async function ajaxGet(url: string, params = {}) {
  return await ajaxRequest(url, params, axios.get)
}

async function ajaxPost(url: string, data = {}) {
  return await ajaxRequest(url, data, axios.post)
}
const ajaxGetProxy = cacheProxy(accessTimeProxy(ajaxGet, 1000 * 11))
export { ajaxGet, ajaxPost, ajaxGetProxy }
