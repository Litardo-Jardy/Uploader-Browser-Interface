import { createContext } from 'react'

export type NotificationType = 'success' | 'info' | 'warning' | 'error'

export type NotificationContextType = {
  open: (type: NotificationType, message: string, description?: string) => void
}

export const NotificationContext = createContext<NotificationContextType>(
  {} as NotificationContextType
)
