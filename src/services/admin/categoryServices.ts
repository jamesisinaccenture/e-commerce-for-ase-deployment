import { useState } from 'react';

import { useAdminCategoryStore } from '@/hooks/state/admin/useAdminCategory';
import { toast } from '@/hooks/use-toast';
import { useAxios } from '@/hooks/useAxios';
import {
    ICategory,
    ICategoryResponse,
    ICreateCategoryPayload,
    ICreateCategoryResponse,
    IUpdateCategoryPayload,
    IUpdateCategoryResponse,
} from '@/models/admin.model';
import { ENDPOINTS } from '../endpoints';

export const useCategoryServices = () => {
    const { setCategory } = useAdminCategoryStore();

    const [isLoading, setIsLoading] = useState(false);
    const api = useAxios();

    const handleApiError = (error: unknown, defaultMessage: string) => {
        const errorMessage =
            (error as any)?.response?.data?.message ||
            (error as Error)?.message ||
            defaultMessage;

        toast({
            variant: 'destructive',
            title: 'Error',
            description: errorMessage,
        });

        console.error(error);
        setIsLoading(false);
        throw new Error(errorMessage);
    };

    const getCategory = async (callback?: (data: ICategory[]) => void) => {
        setIsLoading(true);
        try {
            const response: ICategoryResponse = await api.get(
                ENDPOINTS.CATEGORY.GETALL,
            );
            if (!response.data) throw new Error('Could not fetch categories');

            setCategory(response.data.categories);
            if (callback) callback(response.data.categories);
            return response.data.categories;
        } catch (error) {
            handleApiError(error, 'Failed to fetch categories');
        } finally {
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
            if (!response.data) throw new Error('Could not create category');

            getCategory();
            if (callback) callback(response.data.category);

            toast({
                variant: 'success',
                title: 'Create Category',
                description: 'Category created successfully',
            });

            return response.data.category;
        } catch (error) {
            handleApiError(error, 'Failed to create category');
        } finally {
            setIsLoading(false);
        }
    };

    const deleteCategory = async (
        category_id?: string,
        callback?: (data: ICategory[]) => void,
    ) => {
        setIsLoading(true);
        try {
            const response = await api.delete(
                `${ENDPOINTS.CATEGORY.BASE}/${category_id}`,
            );
            if (!response.data) throw new Error('Could not delete category');

            getCategory();
            if (callback) callback(response.data.category);

            toast({
                variant: 'success',
                title: 'Delete Category',
                description: 'Category deleted successfully',
            });
        } catch (error) {
            handleApiError(error, 'Failed to delete category');
        } finally {
            setIsLoading(false);
        }
    };

    const updateCategory = async (
        payload: IUpdateCategoryPayload,
        callback?: (data: ICategory[]) => void,
    ) => {
        setIsLoading(true);
        try {
            const response: IUpdateCategoryResponse = await api.put(
                `${ENDPOINTS.CATEGORY.BASE}/${payload.category_id}`,
                payload,
            );
            if (!response.data) throw new Error('Could not update category');

            getCategory();
            if (callback) callback(response.data.category);

            toast({
                variant: 'success',
                title: 'Update Category',
                description: 'Category updated successfully',
            });

            return response.data.category;
        } catch (error) {
            handleApiError(error, 'Failed to update category');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        getCategory,
        createCategory,
        deleteCategory,
        updateCategory,
        isLoading,
    };
};
