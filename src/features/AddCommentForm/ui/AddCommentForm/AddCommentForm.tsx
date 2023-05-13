import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducersList, useDynamicModuleLoader } from '@/shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { Button, ButtonSize } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentsFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
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
    const {
        onSendComment,
        isLoading,
        className = '',
    } = props;

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

    const onSendHandler = useCallback(
        () => {
            onSendComment?.(text || '');
            onCommentTextChange('');
        },
        [text, onCommentTextChange, onSendComment],
    );

    return (
        <div
            className={cn(s.outer, {}, [className])}
            data-testid="AddCommentForm"
        >
            <Input
                placeholder={t('Добавить комментарий')}
                value={text}
                onChange={onCommentTextChange}
                inputClassName={s.field}
                type="textarea"
                disabled={isLoading}
                data-testid="AddCommentForm.Input"
            />
            <Button
                label={t('Отправить')}
                size={ButtonSize.S}
                onClick={onSendHandler}
                disabled={isLoading || !text}
                data-testid="AddCommentForm.Button"
            />
        </div>
    );
});

export default AddCommentForm;
