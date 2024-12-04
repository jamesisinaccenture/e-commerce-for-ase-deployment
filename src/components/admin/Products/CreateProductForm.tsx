import { useEffect } from 'react';
import { ShoppingBasket } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { CustomCombobox } from '@/components/reusable/CustomComboBox';
import CustomFormItem from '@/components/reusable/CustomFormItem';
import CustomInput from '@/components/reusable/CustomInput';
import { Button } from '@/components/ui/button';
import { FormField, Form } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useAdminCategoryStore } from '@/hooks/state/admin/useAdminCategory';
import { toast } from '@/hooks/use-toast';
import { closeModal, imageToBlob } from '@/lib/utils';
import { IProduct } from '@/models/admin.model';
import { productFormSchema } from '@/schema/adminSchema';
import { useCategoryServices } from '@/services/admin/categoryServices';
import { useProductServices } from '@/services/admin/productServices';
import { DialogClose } from '@radix-ui/react-dialog';
import DropImageInput from '../DropImageInput';

import { zodResolver } from '@hookform/resolvers/zod';

interface ICreateProductForm {
    product?: IProduct;
}

const CreateProductForm = ({
    product = {} as IProduct,
}: ICreateProductForm) => {
    const form = useForm({
        resolver: zodResolver(productFormSchema),
        defaultValues: {
            product_id: '',
            product_name: '',
            product_img: '',
            product_description: undefined,
            category: [],
            price: 0,
            currency: '',
            sold: 0,
            date_created: '',
            created_by: '',
        },
    });

    const { createProduct, isLoading } = useProductServices();
    const { getCategory } = useCategoryServices();
    const { category } = useAdminCategoryStore();

    const onSubmit = (data: IProduct) => createProduct(data, closeModal);

    const categoryItems =
        category?.map((cat) => ({
            value: String(cat?.category_id),
            label: String(cat?.category_name),
        })) || [];

    const selectedCategories =
        product.category?.map((cat) => cat.category_id || '') || [];

    useEffect(() => {
        category && getCategory();
    }, []);

    return (
        <div>
            <div className='flex gap-2 items-center my-2'>
                <ShoppingBasket />
                <h1 className='font-bold text-lg'>Add new products</h1>
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
                                name='product_name'
                                render={({ field }) => (
                                    <CustomFormItem label='Product name*'>
                                        <CustomInput
                                            label='Product'
                                            className='w-full'
                                            {...field}
                                        />
                                    </CustomFormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='product_description'
                                render={({ field }) => (
                                    <CustomFormItem label='Product description*'>
                                        <Textarea
                                            placeholder='Product description'
                                            {...field}
                                        />
                                    </CustomFormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='category'
                                render={({ field }) => (
                                    <CustomFormItem label='Category'>
                                        <div className='mt-1'>
                                            <CustomCombobox
                                                options={categoryItems}
                                                selectedOptions={
                                                    selectedCategories
                                                }
                                                onChange={(
                                                    selectedItems: any,
                                                ) =>
                                                    field.onChange(
                                                        selectedItems,
                                                    )
                                                }
                                            />
                                        </div>
                                    </CustomFormItem>
                                )}
                            />

                            <div className='flex justify-between gap-2'>
                                <FormField
                                    control={form.control}
                                    name='price'
                                    render={({ field }) => (
                                        <CustomFormItem label='Price*'>
                                            <CustomInput
                                                label='Price'
                                                className='w-full'
                                                type='number'
                                                {...field}
                                            />
                                        </CustomFormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='currency'
                                    render={({ field }) => (
                                        <CustomFormItem label='Currency*'>
                                            <CustomInput
                                                label='Currency'
                                                {...field}
                                            />
                                        </CustomFormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name='product_img'
                                render={({ field }) => {
                                    const { onChange } = field;
                                    return (
                                        <CustomFormItem label='Product image'>
                                            <DropImageInput
                                                onImageDrop={async (file) => {
                                                    try {
                                                        const blob =
                                                            await imageToBlob(
                                                                file,
                                                            );
                                                        onChange(blob);
                                                    } catch (error) {
                                                        toast({
                                                            variant:
                                                                'destructive',
                                                            title: 'Error uploading image',
                                                            description:
                                                                'Please try again.',
                                                        });
                                                    }
                                                }}
                                                value={field.value}
                                            />
                                        </CustomFormItem>
                                    );
                                }}
                            />
                        </div>

                        <div className='flex gap-2 justify-end'>
                            <DialogClose asChild>
                                <Button
                                    id='closeModal'
                                    type='button'
                                    onClick={() => {
                                        form.reset();
                                    }}
                                    variant='ghost'
                                >
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button type='submit' disabled={isLoading}>
                                Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default CreateProductForm;
