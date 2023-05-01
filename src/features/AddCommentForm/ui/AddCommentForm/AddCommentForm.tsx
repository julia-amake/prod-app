import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonSize } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducersList, useDynamicModuleLoader } from '@/shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import s from './AddCommentForm.module.scss';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentsFormSelectors';

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
        <div className={cn(s.outer, {}, [className])}>
            <Input
                placeholder={t('Добавить комментарий')}
                value={text}
                onChange={onCommentTextChange}
                inputClassName={s.field}
                type="textarea"
                disabled={isLoading}
            />
            <Button
                label={t('Отправить')}
                size={ButtonSize.S}
                onClick={onSendHandler}
                disabled={isLoading || !text}
            />
        </div>
    );
});

export default AddCommentForm;
