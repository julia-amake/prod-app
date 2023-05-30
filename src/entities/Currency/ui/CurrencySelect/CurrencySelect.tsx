import React, { FC, memo, useCallback } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    ListBox as ListBoxDeprecated,
    ListBoxOption,
} from '@/shared/ui/deprecated/Popups/ui';
import { ListBox } from '@/shared/ui/redesigned/Popups/ui';
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
        readOnly = true,
    } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    const listBoxProps = {
        label,
        options,
        onChange: onChangeHandler,
        value,
        readonly: readOnly,
        className: cn('', {}, [className]),
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...listBoxProps} size="m" />}
            off={<ListBoxDeprecated {...listBoxProps} />}
        />
    );
});
