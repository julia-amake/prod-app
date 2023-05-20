import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
    test('button was rendered', () => {
        render(<Button label="Test" />);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('button has .clear', () => {
        render(<Button label="Test" variant="clear" />);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
