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
            if (callback) callback(response.data.categories);
            setCategory(response.data.categories);
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
            if (!response.data) {
                toast({
                    variant: 'destructive',
                    title: 'Error creating category',
                    description: 'Please try again.',
                });
                throw new Error('Error: Could not create category');
            }

            setIsLoading(false);
            if (callback) callback(response.data.category);
            getCategory();
            toast({
                variant: 'success',
                title: 'Create Category',
                description: 'Category created successfully',
            });
            return response;
        } catch (error) {
            setIsLoading(false);
            toast({
                variant: 'destructive',
                title: 'Error creating category',
                description:
                    error.message ||
                    'Error occurred while creating, please try again.',
            });
            throw new Error(error);
        }
    };

    const deleteCategory = async (
        category_id?: string,
        callback?: (data: ICategory[]) => void,
    ) => {
        try {
            const response = await api.delete(
                `${ENDPOINTS.CATEGORY.BASE}/${category_id}`,
            );
            if (!response.data) {
                toast({
                    variant: 'destructive',
                    title: 'Error deleting category',
                    description: 'Please try again.',
                });
                throw new Error('Error: Could not delete category');
            }
            if (callback) callback(response.data.category);
            getCategory();
            toast({
                variant: 'success',
                title: 'Delete Category',
                description: 'Category deleted successfully',
            });
        } catch (error) {
            setIsLoading(false);
            toast({
                variant: 'destructive',
                title: 'Error deleting category',
                description:
                    error.message ||
                    'Error occurred while deleting, please try again.',
            });
            throw new Error(error);
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
            if (!response.data) {
                toast({
                    variant: 'destructive',
                    title: 'Error updating category',
                    description: 'Please try again.',
                });
                throw new Error('Error: Could not update category');
            }

            if (callback) callback(response.data.category);
            toast({
                variant: 'success',
                title: 'Update Category',
                description: 'Category updated successfully',
            });
            getCategory();

            return response.data.category;
        } catch (error: any) {
            setIsLoading(false);
            toast({
                variant: 'destructive',
                title: 'Error updating category',
                description:
                    error.message ||
                    'Error occurred while updating, please try again.',
            });
            throw new Error(error);
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
