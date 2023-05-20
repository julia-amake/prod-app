import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/deprecated/Button';
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
            <h1 data-testid="value-title">{`value = ${counterValue}`}</h1>
            <Button
                label={t('Decrement')}
                onClick={onDecrement}
                data-testid="decrement-btn"
            />
            <Button
                onClick={onIncrement}
                label={t('Increment')}
                data-testid="increment-btn"
            />
            <Button
                label={t('Add 5')}
                onClick={onAddFive}
                data-testid="five-button"
            />
        </div>
    );
};
export default Counter;
