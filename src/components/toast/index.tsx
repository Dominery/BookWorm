import React from 'react'

import './index.scss'

function Toast(props: { showToast: boolean; toast: string }) {
  const { showToast, toast } = props
  return <div className={`toast ${showToast ? '' : 'toast--hide'}`}>{toast}</div>
}

const ToastContext = React.createContext((toast: string, duration: number) => {})

export default Toast
export { ToastContext }
