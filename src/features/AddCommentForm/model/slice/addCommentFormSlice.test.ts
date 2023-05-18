import { AddCommentFormSchema } from '../types/addCommentForm';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('addCommentFormSlice.test', () => {
    test('set username', () => {
        const state: DeepPartial<AddCommentFormSchema> = { text: '' };
        expect(
            addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.setText('123123')),
        ).toEqual({ text: '123123' });
    });
});
