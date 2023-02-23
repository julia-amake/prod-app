import React from 'react';
import Button from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';

const Counter: React.FC = () => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {`value = ${counterValue}`}
            </h1>
            <Button
                onClick={decrement}
                data-testid="decrement-btn"
            >
                {t('Decrement')}
            </Button>
            <Button
                onClick={increment}
                data-testid="increment-btn"
            >
                {t('Increment')}
            </Button>
        </div>
    );
};
export default Counter;