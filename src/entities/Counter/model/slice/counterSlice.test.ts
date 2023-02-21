import { CounterSchema } from 'entities/Counter';
import { counterActions, counterReducer } from './CounterSlice';

describe('counterSlice', () => {
    test('counterSlice increment', () => {
        const state: CounterSchema = { value: 10 };

        expect(
            counterReducer(state as CounterSchema, counterActions.increment()),
        ).toEqual({ value: 11 });
    });

    test('counterSlice decrement', () => {
        const state: CounterSchema = { value: 10 };

        expect(
            counterReducer(state as CounterSchema, counterActions.decrement()),
        ).toEqual({ value: 9 });
    });

    test('counterSlice should work with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment()),
        ).toEqual({ value: 1 });
    });
});
