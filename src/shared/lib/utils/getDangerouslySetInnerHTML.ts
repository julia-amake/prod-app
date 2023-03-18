import { ReactNode } from 'react';

export function getDangerouslySetInnerHTML(htmlStr: string | ReactNode) {
    return { dangerouslySetInnerHTML: { __html: htmlStr } };
}
