import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

interface Option {
    value: string;
    label: string;
}

interface CustomMultipleSelectionProps {
    options: Option[];
    onChange?: (selectedItems: string[]) => void;
}

const CustomMultipleSelection: React.FC<CustomMultipleSelectionProps> = ({
    options,
    onChange,
}) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSelect = (item: string) => {
        const updatedSelection = selectedItems.includes(item)
            ? selectedItems.filter((i) => i !== item)
            : [...selectedItems, item];

        setSelectedItems(updatedSelection);
        onChange?.(updatedSelection);
    };

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <div className='relative'>
            <div
                onClick={toggleDropdown}
                className='flex items-center justify-between p-2 border rounded cursor-pointer'
            >
                <span>
                    {selectedItems.length > 0
                        ? `${selectedItems.length} selected`
                        : 'Select categories'}
                </span>
                <ChevronDown className='w-4 h-4' />
            </div>

            {isDropdownOpen && (
                <div className='absolute z-10 mt-2 w-full border bg-white rounded shadow-lg max-h-40 overflow-auto'>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(option.value)}
                            className={`flex items-center p-2 cursor-pointer ${
                                selectedItems.includes(option.value)
                                    ? 'bg-gray-100'
                                    : ''
                            }`}
                        >
                            <span className='flex-1'>{option.label}</span>
                            {selectedItems.includes(option.value) && (
                                <Check className='w-4 h-4 text-green-500' />
                            )}
                        </div>
                    ))}
                </div>
            )}

            <div className='flex flex-wrap gap-2 mt-2'>
                {selectedItems.map((item) => (
                    <div
                        key={item}
                        className='flex items-center px-3 py-1 bg-gray-200 rounded-full text-sm space-x-2'
                    >
                        <span>
                            {options.find((opt) => opt.value === item)?.label}
                        </span>
                        <button
                            type='button'
                            onClick={() => handleSelect(item)}
                            className='text-gray-600 hover:text-red-500'
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomMultipleSelection;
