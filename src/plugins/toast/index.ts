import { reactive } from '@vue/reactivity';
import _ from 'lodash';

interface INotification {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
}

export const toast = reactive({
    notifications: new Set([] as INotification[]),
    _add: (newNotification: INotification) => {
        // Check if such a notification already exists in the state
        // const index = _.findIndex(Array.from(toast.notifications), notification => _.isMatch(notification, newNotification));
        // if(index !== -1) return;
        
        toast.notifications.add(newNotification);
    },
    _remove: (notification: INotification) => toast.notifications.delete(notification),
    _clear: () => toast.notifications.clear(),

    show: (message: string, options?: any) => toast._add({ message, ...options }),
    success: (message: string, options?: any) => toast._add({ message, ...options, type: 'success' }),
    error: (message: string, options?: any) => toast._add({ message, ...options, type: 'error' }),
    warning: (message: string, options?: any) => toast._add({ message, ...options, type: 'warning' }),
    info: (message: string, options?: any) => toast._add({ message, ...options, type: 'info' })
});
