import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/CounterSlice';

const Counter: React.FC = () => {
    const { t } = useTranslation();

    const counterValue = useCounterValue();

    const { increment, decrement, add } = useCounterActions();

    const onIncrement = () => {
        increment();
    };
    const onDecrement = () => {
        decrement();
    };

    const onAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {`value = ${counterValue}`}
            </h1>
            <Button
                label={t('Decrement')}
                onClick={onDecrement}
                data-testid="decrement-btn"
            />
            <Button
                onClick={onIncrement}
                data-testid="increment-btn"
                label={t('Increment')}
            />
            <Button
                onClick={onAddFive}
                label={t('Add 5')}
            />
        </div>
    );
};
export default Counter;
