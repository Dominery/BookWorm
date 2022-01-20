import axios from 'axios'
import { useState } from 'react'
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

const ajaxRequestProxy = accessTimeProxy(ajaxRequest, 1000 * 11)

async function ajaxGet(url: string, params = {}) {
  return await ajaxRequestProxy(url, params, axios.get)
}

async function ajaxPost(url: string, data = {}) {
  return await ajaxRequestProxy(url, data, axios.post)
}
const ajaxGetProxy = cacheProxy(ajaxGet)
const ajaxPostProxy = cacheProxy(ajaxPost)

function useOnRequest<T>(requestFunc: (...params) => Promise<T>): [boolean, (...params: any[]) => Promise<T>] {
  const [onRequest, setRequest] = useState(false)
  const request = (...params) => {
    setRequest(true)
    return requestFunc(...params).finally(() => {
      setRequest(false)
    })
  }
  return [onRequest, request]
}

export { ajaxGet, ajaxPost, ajaxGetProxy, ajaxPostProxy, useOnRequest }
