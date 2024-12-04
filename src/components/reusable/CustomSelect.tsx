import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface ISelectItems {
    value: string;
    label: string;
}

interface ISelect {
    items: ISelectItems[];
    defaultValue?: string;
    placeholder?: string;
    onChange: (value: string) => void;
    triggerClassName?: string;
}

export function CustomSelect({
    items,
    defaultValue,
    placeholder,
    onChange,
    triggerClassName,
}: ISelect) {
    return (
        <Select onValueChange={onChange} defaultValue={defaultValue}>
            <SelectTrigger className={`${triggerClassName}`}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{placeholder}</SelectLabel>
                    {items.map((item) => {
                        return (
                            <SelectItem key={item.value} value={item.value}>
                                {item.label}
                            </SelectItem>
                        );
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
