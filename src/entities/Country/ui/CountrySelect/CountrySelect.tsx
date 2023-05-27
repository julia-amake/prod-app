import React, { memo, useCallback } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    ListBox as ListBoxDeprecated,
    ListBoxOption,
} from '@/shared/ui/deprecated/Popups/ui';
import { ListBox } from '@/shared/ui/redesigned/Popups/ui';
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
    const {
        className = '',
        value = Country.RUSSIA,
        label = '',
        onChange,
        readOnly = false,
    } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
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
