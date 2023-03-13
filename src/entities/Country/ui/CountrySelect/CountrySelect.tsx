import React, { memo, useCallback } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import Select, { SelectOption } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    label?: string;
    readOnly?: boolean;
}

const options:SelectOption[] = Object.values(Country).map((item) => ({
    value: item, content: item,
}));

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className = '',
        value = Country.RUSSIA,
        label = '',
        onChange,
        readOnly = false,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={cn('', {}, [className])}
            label={label}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readOnly={readOnly}
        />
    );
});
