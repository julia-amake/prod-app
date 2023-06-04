import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Send from '@/shared/assets/icons/redesigned/Send.svg';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    ReducersList,
    useDynamicModuleLoader,
} from '@/shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import {
    Button as ButtonDeprecated,
    ButtonSize,
} from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentsFormSelectors';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import s from './AddCommentForm.module.scss';

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

export interface AddCommentFormProps {
    onSendComment: (text: string) => void;
    className?: string;
    isLoading?: boolean;
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { onSendComment, isLoading, className = '' } = props;

    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    useDynamicModuleLoader(reducers);

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment?.(text || '');
        onCommentTextChange('');
    }, [text, onCommentTextChange, onSendComment]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <HStack
                    className={cn(s.redesigned_outer, {}, [className])}
                    gap="16"
                    align="center"
                    data-testid="AddCommentForm"
                >
                    <Input
                        className={s.redesigned_input}
                        placeholder={`${t('Написать комментарий')}...`}
                        value={text}
                        onChange={onCommentTextChange}
                        disabled={isLoading}
                        data-testid="AddCommentForm.Input"
                    />
                    <Button
                        className={s.redesigned_btn}
                        variant="clear"
                        icon={{ element: Send, size: 'l' }}
                        title={t('Отправить')}
                        onClick={onSendHandler}
                        disabled={isLoading || !text}
                        data-testid="AddCommentForm.Button"
                    />
                </HStack>
            }
            off={
                <div
                    className={cn(s.outer, {}, [className])}
                    data-testid="AddCommentForm"
                >
                    <InputDeprecated
                        placeholder={t('Добавить комментарий')}
                        value={text}
                        onChange={onCommentTextChange}
                        inputClassName={s.field}
                        type="textarea"
                        disabled={isLoading}
                        data-testid="AddCommentForm.Input"
                    />
                    <ButtonDeprecated
                        label={t('Отправить')}
                        size={ButtonSize.S}
                        onClick={onSendHandler}
                        disabled={isLoading || !text}
                        data-testid="AddCommentForm.Button"
                    />
                </div>
            }
        />
    );
});

export default AddCommentForm;
