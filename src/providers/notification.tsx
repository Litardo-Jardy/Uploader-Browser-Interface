import { notification } from 'antd'
import type {  NotificationType } from './notification.contex'
import  {  NotificationContext } from './notification.contex'
import "../styles/notification.css"

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [api, contextHolder] = notification.useNotification()

  const open = (type: NotificationType, message: string, description?: string) => {
    api[type]({
      className: `custom-notification custom-notification--${type}`,
      message,
      description: (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span>{description}</span>
      <button className="custom-notification-btn" onClick={() => api.destroy()}>
        Close
      </button>
    </div>
  ),

  placement: 'top',
  duration: 2000,      
    })
  }

  return (
    <NotificationContext.Provider value={{ open }}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  )
}
