import React, {
    memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import CopyDoneLine from '@/shared/assets/icons/CopyDoneLine.svg';
import CopyLine from '@/shared/assets/icons/CopyLine.svg';
import { cn } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import s from './Code.module.scss';

interface CodeProps {
    content: string;
    className?: string;
}

export const Code = memo((props: CodeProps) => {
    const {
        content,
        className = '',
    } = props;

    const { t } = useTranslation();
    const [isCopied, setIsCopied] = useState(false);

    const onCopy = useCallback(
        () => {
            navigator.clipboard.writeText(content).then(() => {
                setIsCopied(true);
            });
        },
        [content],
    );

    return (
        <pre className={cn(s.outer, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                icon={{
                    element: isCopied ? CopyDoneLine : CopyLine,
                    className: cn(s.copy_icon, { [s.copy_icon_done]: isCopied }),
                }}
                className={s.copy}
                title={t(isCopied ? 'Скопировано' : 'Копировать')}
                onClick={onCopy}
            />
            <code>
                {content}
            </code>
        </pre>
    );
});
