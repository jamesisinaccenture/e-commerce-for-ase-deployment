import { useState } from 'react';

import { useAdminCategoryStore } from '@/hooks/state/admin/useAdminCategory';
import { useAdminGeneralStore } from '@/hooks/state/admin/useAdminGeneral';
import { useAxios } from '@/hooks/useAxios';
import {
    ICategory,
    ICategoryResponse,
    ICreateCategoryPayload,
    ICreateCategoryResponse,
} from '@/models/admin.model';
import { ENDPOINTS } from '../endpoints';

export const useCategoryServices = () => {
    const { setCategory } = useAdminCategoryStore();

    const [isLoading, setIsLoading] = useState(false);
    const api = useAxios();

    const getCategory = async (callback?: (data: ICategory[]) => void) => {
        setIsLoading(true);

        try {
            const response: ICategoryResponse = await api.get(
                ENDPOINTS.CATEGORY.GETALL,
            );
            console.log(response);
            if (!response.data)
                throw new Error('Error: Could not get category');

            setIsLoading(false);
            if (callback) callback(response.data);
            setCategory(response.data);
            return response;
        } catch (error) {
            setIsLoading(false);
        }
    };

    const createCategory = async (
        payload: ICreateCategoryPayload,
        callback?: (data: ICategory[]) => void,
    ) => {
        setIsLoading(true);

        try {
            const response: ICreateCategoryResponse = await api.post(
                ENDPOINTS.CATEGORY.BASE,
                payload,
            );
            console.log(response);
            setIsLoading(false);
            if (callback) callback(response.data.category);
            return response;
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const deleteCategory = async (
        category_id?: string,
        callback?: () => void,
    ) => {
        try {
            const response = await api.delete(
                `${ENDPOINTS.CATEGORY.BASE}/${category_id}`,
            );
            console.log(response);
            if (callback) callback();
        } catch (error) {
            console.log(error);
        }
    };

    return {
        getCategory,
        isLoading,
        createCategory,
        deleteCategory,
    };
};
