import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib/classNames/classNames';
import { getFeatureFlag, updateFeatureFlags } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ListBox } from '@/shared/ui/redesigned/Popups/ui';
import { getUserAuthData } from '@/entities/User';
import s from './UiDesignSwitcher.module.scss';

interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
    const { className = '' } = props;
    const { t } = useTranslation();
    const isRedesigned = getFeatureFlag('isAppRedesigned');
    const user = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const options = [
        {
            title: t('Дизайн #1'),
            value: 'old',
        },
        {
            title: t('Дизайн #2'),
            value: 'new',
        },
    ];

    const onChange = async (value: string) => {
        if (!user) return;
        setIsLoading(true);
        await dispatch(
            updateFeatureFlags({
                userId: user?.id,
                newFeatures: {
                    isAppRedesigned: value === 'new',
                },
            }),
        ).unwrap();
    };

    return (
        <div className={cn(s.outer, {}, [className])}>
            <ListBox
                onChange={onChange}
                label={t('Вариант дизайна')}
                options={options}
                value={isRedesigned ? 'new' : 'old'}
                readonly={isLoading}
            />
        </div>
    );
});
