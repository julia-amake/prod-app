export function getDangerouslySetInnerHTML(htmlStr: string) {
    return htmlStr ? { dangerouslySetInnerHTML: { __html: htmlStr } } : {};
}
