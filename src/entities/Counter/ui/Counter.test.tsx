import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import Counter from './Counter';

describe('Counter component', () => {
    test('Counter was rendered', async () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', async () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        await userEvent.click(screen.getByTestId('increment-btn'));
        screen.debug();
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test(
        'decrement',
        async () => {
            componentRender(<Counter />, {
                initialState: {
                    counter: { value: 10 },
                },
            });
            await userEvent.click(screen.getByTestId('decrement-btn'));
            expect(screen.getByTestId('value-title')).toHaveTextContent('9');
        },
    );

    test(
        'add 5',
        async () => {
            componentRender(<Counter />, {
                initialState: {
                    counter: { value: 10 },
                },
            });
            await userEvent.click(screen.getByTestId('five-button'));
            expect(screen.getByTestId('value-title')).toHaveTextContent('15');
        },
    );
});
