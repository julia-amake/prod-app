import React from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import s from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={cn(s.loginForm, {}, [className])}>
            <Input
                type="text"
                label={t('Имя пользователя')}
                placeholder={t('Введите имя пользователя')}
                className={s.input}
            />
            <Input
                type="text"
                label={t('Пароль')}
                placeholder={t('Введите пароль')}
                className={s.input}
            />
            <Button className={s.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};

export default LoginForm;
