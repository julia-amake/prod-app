import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    ReducersList,
    useDynamicModuleLoader,
} from '@/shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import {
    Heading as HeadingDeprecated,
    HeadingSize,
} from '@/shared/ui/deprecated/Heading';
import { Informer as InformerDeprecated } from '@/shared/ui/deprecated/Informer';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Informer } from '@/shared/ui/redesigned/Informer';
import { Input } from '@/shared/ui/redesigned/Input';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
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
    const { onSuccess, className = '' } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    useDynamicModuleLoader(initialReducers, true);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [username, password, dispatch, onSuccess]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div className={cn(s.loginForm, {}, [className])}>
                    <Input
                        className={s.redesigned_input}
                        type="text"
                        size="l"
                        placeholder={t('Введите имя пользователя')}
                        onChange={onChangeUsername}
                        value={username}
                        autoFocus
                    />
                    <Input
                        className={s.redesigned_input}
                        type="text"
                        size="l"
                        placeholder={t('Введите пароль')}
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
                        className={s.loginBtn}
                        size="l"
                        disabled={isLoading}
                        label={t('Войти')}
                        onClick={onLoginClick}
                    />
                </div>
            }
            off={
                <div className={cn(s.loginForm, {}, [className])}>
                    <HeadingDeprecated
                        size={HeadingSize.S}
                        className={s.title}
                        content={t('Войти')}
                    />
                    <InputDeprecated
                        type="text"
                        label={t('Имя пользователя')}
                        placeholder={t('Введите имя пользователя')}
                        className={s.input}
                        onChange={onChangeUsername}
                        value={username}
                        autoFocus
                    />
                    <InputDeprecated
                        type="text"
                        label={t('Пароль')}
                        placeholder={t('Введите пароль')}
                        className={s.input}
                        onChange={onChangePassword}
                        value={password}
                    />
                    {error && (
                        <InformerDeprecated
                            title={t('Вы ввели неверный логин или пароль')}
                            isCentered
                            className={s.error}
                        />
                    )}
                    <ButtonDeprecated
                        label={t('Войти')}
                        onClick={onLoginClick}
                        className={s.loginBtn}
                        disabled={isLoading}
                    />
                </div>
            }
        />
    );
});

export default LoginForm;
