import React, {
    memo, ReactNode, useCallback, useEffect,
} from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import s from './Drawer.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    className?: string;
    lazy?: boolean,
}

const height = window.innerHeight - 100;

const DrawerContent = memo((props: DrawerProps) => {
    const {
        isOpen,
        onClose,
        children,
        lazy = false,
        className = '',
    } = props;

    const { Spring, Gesture } = useAnimationLibs();
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const { theme } = useTheme();

    const openDrawer = useCallback(
        () => {
            api.start({ y: 0, immediate: false });
        },
        [api],
    );

    const close = (velocity = 0, duration = 300) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity, duration },
            onResolve: onClose,
        });
    };

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [isOpen, openDrawer]);

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else openDrawer();
            } else api.start({ y: my, immediate: true });
        },
        {
            from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
        },
    );

    if (!isOpen) return null;

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
        <Portal>
            <div className={cn(s.outer, {}, [className, theme])}>
                <Overlay onClick={() => close()} className={s.overlay} />
                <Spring.a.div
                    className={s.content}
                    style={{ display, y }}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
});

const DrawerAsync = (props: DrawerProps) => {
    const { children, ...other } = props;

    const { isLoaded } = useAnimationLibs();
    if (!isLoaded) return null;
    return (
        <DrawerContent {...other}>
            {children}
        </DrawerContent>
    );
};

export const Drawer = ({ children, ...other }: DrawerProps) => (
    <AnimationProvider>
        <DrawerAsync {...other}>
            {children}
        </DrawerAsync>
    </AnimationProvider>
);
