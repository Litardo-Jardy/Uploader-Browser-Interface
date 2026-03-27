import { useContext } from 'react'
import { NotificationContext } from '../providers/notification.contex' 
import type { NotificationContextType } from '../providers/notification.contex'

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext)

  if (!context) {
    throw new Error('useNotification must be used within NotificationProvider')}

  return context}
