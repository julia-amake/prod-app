import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Informer } from '@/shared/ui/Informer';
import { Heading, HeadingSize } from '@/shared/ui/Heading';
import { ReducersList, useDynamicModuleLoader } from '@/shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import s from './LoginForm.module.scss';

export interface LoginFormProps {
    onSuccess: () => void;
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const {
        onSuccess,
        className = '',
    } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    useDynamicModuleLoader(initialReducers, true);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [username, password, dispatch, onSuccess]);

    return (
        <div className={cn(s.loginForm, {}, [className])}>
            <Heading
                size={HeadingSize.S}
                className={s.title}
                content={t('Войти')}
            />
            <Input
                type="text"
                label={t('Имя пользователя')}
                placeholder={t('Введите имя пользователя')}
                className={s.input}
                onChange={onChangeUsername}
                value={username}
                autoFocus
            />
            <Input
                type="text"
                label={t('Пароль')}
                placeholder={t('Введите пароль')}
                className={s.input}
                onChange={onChangePassword}
                value={password}
            />
            {error && (
                <Informer
                    title={t('Вы ввели неверный логин или пароль')}
                    isCentered
                    className={s.error}
                />
            )}
            <Button
                label={t('Войти')}
                onClick={onLoginClick}
                className={s.loginBtn}
                disabled={isLoading}
            />
        </div>
    );
});

export default LoginForm;
