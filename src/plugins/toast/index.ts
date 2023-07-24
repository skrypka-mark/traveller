import { reactive } from '@vue/reactivity';
import { nanoid } from 'nanoid';
import _ from 'lodash';

export type INotificationType = 'success' | 'error' | 'warning' | 'info';

export interface INotification {
    id: string;
    message: string;
    type: INotificationType;
    click?: (...options: any) => void;
}

export const toast = reactive({
    notifications: new Set([] as INotification[]),
    _add: (newNotification: INotification) => toast.notifications.add({ ...newNotification, id: nanoid() }),
    _remove: (notification: INotification) => toast.notifications.delete(notification),
    _clear: () => toast.notifications.clear(),

    show: (message: string, options?: any) => toast._add({ ...options, message }),
    success: (message: string, options?: any) => toast._add({ ...options, message, type: 'success' }),
    error: (message: string, options?: any) => toast._add({ ...options, message, type: 'error' }),
    warning: (message: string, options?: any) => toast._add({ ...options, message, type: 'warning' }),
    info: (message: string, options?: any) => toast._add({ ...options, message, type: 'info' })
});
