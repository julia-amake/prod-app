import { render, screen } from '@testing-library/react';
import Button, { ButtonTheme } from './Button';

describe('Button component', () => {
    test('button was rendered', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('button has .clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
