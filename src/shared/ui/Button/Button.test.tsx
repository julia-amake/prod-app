import { render, screen } from '@testing-library/react';
import Button, { ButtonTheme } from './Button';

describe('Button component', () => {
    test('button was rendered', () => {
        render(<Button label="Test" />);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('button has .clear', () => {
        render(<Button theme={ButtonTheme.CLEAR} label="Test" />);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
