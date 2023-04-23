import debounce from 'lodash.debounce';

export const useDebounce = (callback: any, timeout: number) => {
    return debounce(callback, timeout);
};
