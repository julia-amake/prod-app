import React, { FC, memo, useCallback } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { ListBox, ListBoxOption } from '@/shared/ui/Popups/ui';
import { Currency } from '../../model/consts/consts';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    label?: string;
    readOnly?: boolean;
}

const options: ListBoxOption[] = Object.values(Currency).map((item) => ({
    value: item,
    title: item,
}));

export const CurrencySelect: FC<CurrencySelectProps> = memo((props) => {
    const {
        className = '',
        value = Currency.RUB,
        label = '',
        onChange,
        readOnly = false,
    } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
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
