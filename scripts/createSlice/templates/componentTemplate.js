const interfaceConst = 'interface';

module.exports = (componentName) => `import { cn } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import s from './${componentName}.module.scss';

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
    const {
      className = ''
    } = props;
    const { t } = useTranslation();
    
    return (
        <div className={cn(s.outer, {}, [className])}>
           ...
        </div>
    );
});`;
