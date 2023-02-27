import React, { useCallback } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import Informer from 'shared/ui/Informer/Informer';
import Heading, { HeadingSize } from 'shared/ui/Heading/Heading';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import s from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = (value: string) => {
        dispatch(loginActions.setUsername(value));
    };

    const onChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value));
    };

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [username, password, dispatch]);

    return (
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
                autofocus
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
    );
};

export default LoginForm;
