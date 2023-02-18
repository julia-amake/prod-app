import React from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import s from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {
    const { className } = props;

    return (
        <div className={cn(s.navbar, {}, [className])}>
            ...
        </div>
    );
};

export default Navbar;
