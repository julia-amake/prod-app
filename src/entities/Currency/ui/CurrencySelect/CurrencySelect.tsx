import React, { FC, memo, useCallback } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import Select, { SelectOption } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    label?: string;
    readOnly?: boolean;
}

const options:SelectOption<Currency>[] = Object.values(Currency).map((item) => ({
    value: item, content: item,
}));

export const CurrencySelect: FC<CurrencySelectProps> = memo((props) => {
    const {
        className = '',
        value = Currency.RUB,
        label = '',
        onChange,
        readOnly = false,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
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
