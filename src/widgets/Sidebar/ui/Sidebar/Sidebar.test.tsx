import { fireEvent, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import { renderWithTranslation } from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar component', () => {
    test('Sidebar was rendered', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar toggles', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
