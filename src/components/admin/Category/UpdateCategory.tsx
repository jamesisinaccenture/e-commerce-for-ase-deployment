import { ShoppingBasket } from 'lucide-react';
import { useForm } from 'react-hook-form';

import CustomFormItem from '@/components/reusable/CustomFormItem';
import CustomInput from '@/components/reusable/CustomInput';
import { Button } from '@/components/ui/button';
import { FormField, Form } from '@/components/ui/form';
import { ICategory } from '@/models/admin.model';
import { categoryFormSchema } from '@/schema/adminSchema';
import { useCategoryServices } from '@/services/admin/categoryServices';
import { DialogClose } from '@radix-ui/react-dialog';

import { zodResolver } from '@hookform/resolvers/zod';

interface IUpdateCategoryForm {
    category: ICategory;
}

const UpdateCategoryForm = ({ category }: IUpdateCategoryForm) => {
    const form = useForm({
        resolver: zodResolver(categoryFormSchema),
        defaultValues: {
            category_name: category.category_name,
            category_id: category.category_id,
        },
    });
    const { updateCategory, isLoading } = useCategoryServices();

    const onSubmit = (data: any) => updateCategory(data);
    // updateCategory(data, () => {
    //     toast({
    //         title: 'Category created successfully!',
    //         description: 'The new category has been added to the system.',
    //         variant: 'success',
    //     });
    //     closeModal();
    // });
    return (
        <div>
            <div className='flex gap-2 items-center my-2'>
                <ShoppingBasket />
                <h1 className='font-bold text-lg'>Edit new category</h1>
            </div>
            <div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='flex flex-col gap-6'
                    >
                        <div className='flex flex-col gap-4 overflow-auto max-h-[30rem]'>
                            <FormField
                                control={form.control}
                                name='category_name'
                                render={({ field }) => (
                                    <CustomFormItem label='Category name*'>
                                        <CustomInput
                                            label='Category'
                                            className='w-full'
                                            {...field}
                                        />
                                    </CustomFormItem>
                                )}
                            />
                        </div>
                        <div className='flex gap-2 justify-end'>
                            <DialogClose asChild>
                                <Button
                                    type='button'
                                    onClick={() => form.reset()}
                                    variant='ghost'
                                >
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button type='submit' disabled={isLoading}>
                                {' '}
                                {isLoading ? 'Processing...' : 'Submit'}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default UpdateCategoryForm;
