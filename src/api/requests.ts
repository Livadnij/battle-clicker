import axiosClient from './api';

export const getInfo = async (): Promise<any> => {
    const response = await axiosClient.get<any>('/users');
    return response.data;
};
