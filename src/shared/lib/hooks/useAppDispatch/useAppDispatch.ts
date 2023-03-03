import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvider';

// типизируем dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
