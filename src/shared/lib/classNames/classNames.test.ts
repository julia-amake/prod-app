import { cn } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(cn('class1')).toBe('class1');
    });

    test('with additional classes', () => {
        expect(cn('main', {}, ['add1', 'add2'])).toBe('main add1 add2');
    });

    test('with true mods classes', () => {
        expect(cn('main', { mod1: true, mod2: true })).toBe('main mod1 mod2');
    });

    test('with true/false mods classes', () => {
        expect(cn('main', { mod1: true, mod2: false })).toBe('main mod1');
    });

    test('with true/false mods and adds', () => {
        expect(
            cn('main1 main2', { mod1: true, mod2: false, mod3: true }, [
                'add1',
                'add2 add3',
            ]),
        ).toBe('main1 main2 add1 add2 add3 mod1 mod3');
    });
});
