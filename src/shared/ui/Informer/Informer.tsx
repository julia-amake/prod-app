import React, { memo, ReactNode } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import InfoLine from '@/shared/assets/icons/InfoLine.svg';
import s from './Informer.module.scss';

export enum InformerStatuses {
    INFO = 'status_info',
    ERROR = 'status_error'
}

interface InformerProps {
    status?: InformerStatuses;
    title? : string;
    text?: string | ReactNode;
    className?: string;
    showIcon?: boolean;
    isCentered?: boolean;

    'data-testid'?: string;
}

const Informer = memo((props: InformerProps) => {
    const {
        status = InformerStatuses.ERROR,
        title,
        text,
        showIcon = true,
        isCentered = false,
        className,
        'data-testid': dataTestId = 'Informer',
    } = props;

    return (
        <div className={cn(s.informer, {
            [s.informer_centered]: isCentered,
        }, [s[status], className])}
        >
            {showIcon && (
                <InfoLine
                    className={cn(s.icon, { [s.icon_offset]: !isCentered })}
                    data-testid={`${dataTestId}.Icon`}
                />
            )}
            <div className={s.info}>
                {title && (
                    <h3
                        className={s.title}
                        data-testid={`${dataTestId}.Title`}
                    >
                        {title}
                    </h3>
                )}
                {text && <p className={s.text} data-testid={`${dataTestId}.Text`}>{text}</p>}
            </div>
        </div>
    );
});

export default Informer;
