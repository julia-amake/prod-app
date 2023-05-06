import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button component', () => {
    test('button was rendered', () => {
        render(<Button label="Test" />);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('button has .clear', () => {
        render(<Button label="Test" theme={ButtonTheme.CLEAR} />);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
