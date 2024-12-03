'use client';
import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CustomComboBoxProps } from '@/models/store.model';

export function CustomCombobox({
    options,
    onChange,
    selectedOptions,
}: CustomComboBoxProps) {
    const [open, setOpen] = React.useState(false);
    const [selectedValues, setSelectedValues] = React.useState<string[]>(
        selectedOptions || [],
    );

    const toggleSelection = (value: string) => {
        let updatedValues;
        if (selectedValues.includes(value)) {
            updatedValues = selectedValues.filter((v) => v !== value);
        } else {
            updatedValues = [...selectedValues, value];
        }
        setSelectedValues(updatedValues);
        onChange?.(updatedValues);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant='outline'
                    role='combobox'
                    aria-expanded={open}
                    className='w-[100%] justify-between'
                >
                    {selectedValues.length > 0
                        ? selectedValues
                              .map(
                                  (val) =>
                                      options.find((opt) => opt.value === val)
                                          ?.label,
                              )
                              .join(', ')
                        : 'Select categories...'}
                    <ChevronsUpDown className='opacity-50' />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[100%] p-0'>
                <Command>
                    <CommandInput
                        placeholder='Search categories...'
                        className='h-9'
                    />
                    <CommandList>
                        <CommandEmpty>No option found.</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={() =>
                                        toggleSelection(option.value)
                                    }
                                >
                                    {option.label}
                                    <Check
                                        className={cn(
                                            'ml-auto',
                                            selectedValues.includes(
                                                option.value,
                                            )
                                                ? 'opacity-100'
                                                : 'opacity-0',
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
