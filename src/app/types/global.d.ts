// чтобы импортировать классы из scss-модульных файлов как свойства
declare module '*.module.css';
declare module '*.module.scss';

declare module '*.svg' {
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
