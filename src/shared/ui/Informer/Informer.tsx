import React from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import InfoLine from 'shared/assets/icons/InfoLine.svg';
import { RequireAtLeastOne } from 'shared/lib/tsUtils';
import s from './Informer.module.scss';

export enum InformerStatuses {
    INFO = 'status_info',
    ERROR = 'status_error'
}

interface InformerPropsBase {
    status?: InformerStatuses;
    title? : string;
    text?: string;
    className?: string;
    showIcon?: boolean;
    isCentered?: boolean;
}
type InformerProps = RequireAtLeastOne<InformerPropsBase, 'title' | 'text'>

const Informer: React.FC<InformerProps> = (props) => {
    const {
        status = InformerStatuses.ERROR,
        title,
        text,
        showIcon = true,
        isCentered = false,
        className,
    } = props;

    return (
        <div className={cn(s.informer, {
            [s.informer_centered]: isCentered,
        }, [s[status], className])}
        >
            {showIcon && <InfoLine className={cn(s.icon, { [s.icon_offset]: !isCentered })} />}
            <div className={s.info}>
                {title && (
                    <h3 className={s.title}>
                        {title}
                    </h3>
                )}
                {text && <p className={s.text}>{text}</p>}
            </div>
        </div>
    );
};

export default Informer;
