import apiClient from './axios';
import type { ApiResponse, Notification } from '@/app/types/api';

/**
 * Notifications API Service
 * Handles all notification-related API calls
 */

// Get all notifications
export const getNotifications = async (params?: {
  read?: boolean;
  type?: 'info' | 'warning' | 'error' | 'success';
  limit?: number;
  page?: number;
}): Promise<ApiResponse<Notification[]>> => {
  const response = await apiClient.get<ApiResponse<Notification[]>>('/notifications', {
    params,
  });
  return response.data;
};

// Get unread notification count
export const getUnreadCount = async (): Promise<number> => {
  const response = await apiClient.get<ApiResponse<{ count: number }>>('/notifications/unread-count');
  return response.data.data.count;
};

// Mark notification as read
export const markNotificationAsRead = async (notificationId: string): Promise<Notification> => {
  const response = await apiClient.patch<ApiResponse<Notification>>(`/notifications/${notificationId}/read`);
  return response.data.data;
};

// Mark all notifications as read
export const markAllNotificationsAsRead = async (): Promise<void> => {
  await apiClient.patch('/notifications/read-all');
};

// Delete notification
export const deleteNotification = async (notificationId: string): Promise<void> => {
  await apiClient.delete(`/notifications/${notificationId}`);
};

// Clear all notifications
export const clearAllNotifications = async (): Promise<void> => {
  await apiClient.delete('/notifications/clear-all');
};
