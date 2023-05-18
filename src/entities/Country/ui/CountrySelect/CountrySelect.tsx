import React, { memo, useCallback } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { ListBox, ListBoxOption } from '@/shared/ui/deprecated/Popups/ui';
import { Country } from '../../model/consts/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    label?: string;
    readOnly?: boolean;
}

const options: ListBoxOption[] = Object.values(Country).map((item) => ({
    value: item,
    title: item,
}));

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className = '', value = Country.RUSSIA, label = '', onChange, readOnly = false } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <ListBox
            label={label}
            options={options}
            onChange={onChangeHandler}
            value={value}
            readonly={readOnly}
            className={cn('', {}, [className])}
        />
    );
});
