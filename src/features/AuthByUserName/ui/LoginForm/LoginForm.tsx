import React, { useCallback } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import Informer from 'shared/ui/Informer/Informer';
import Heading, { HeadingSize } from 'shared/ui/Heading/Heading';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
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

const LoginForm: React.FC<LoginFormProps> = (props) => {
    const {
        onSuccess,
        className,
    } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = (value: string) => {
        dispatch(loginActions.setUsername(value));
    };

    const onChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value));
    };

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [username, password, dispatch, onSuccess]);

    return (
        <DynamicModuleLoader
            name="loginForm"
            reducers={initialReducers}
            removeAfterUnmount
        >
            <div className={cn(s.loginForm, {}, [className])}>
                <Heading
                    size={HeadingSize.S}
                    className={s.title}
                >
                    {t('Войти')}
                </Heading>
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
                    onClick={onLoginClick}
                    className={s.loginBtn}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default LoginForm;
