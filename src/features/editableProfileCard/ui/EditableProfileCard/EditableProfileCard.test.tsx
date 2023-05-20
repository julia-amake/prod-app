import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { $api } from '@/shared/api/api';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    name: 'Name',
    lastname: 'Lastname',
    age: 20,
    currency: Currency.RUB,
    country: Country.RUSSIA,
    city: 'City',
    username: 'username',
};

describe('EditableProfileCard component', () => {
    beforeEach(() =>
        componentRender(<EditableProfileCard id="1" />, {
            initialState: {
                profile: {
                    readonly: true,
                    data: profile,
                    formData: profile,
                },
                user: {
                    authData: {
                        id: '1',
                    },
                },
            },
            asyncReducers: { profile: profileReducer },
        }),
    );

    test('read-only mode should be switched', async () => {
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        ).toBeInTheDocument();
    });

    test('when canceled, the values backs to original', async () => {
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));

        await userEvent.type(
            screen.getByTestId('ProfileCard.Firstname'),
            'fjkjfk',
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.Lastname'),
            'fjkf',
        );

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue(
            'fjkjfk',
        );
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('fjkf');

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        );
        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('Name');
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue(
            'Lastname',
        );
    });

    test('should show an errors', async () => {
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );
        expect(
            screen.getByTestId('EditableProfileCard.Error.Text'),
        ).toBeInTheDocument();
    });
    test('put-request must pass if there are no errors', async () => {
        const mockPutReq = jest.spyOn($api, 'put');

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.type(
            screen.getByTestId('ProfileCard.Firstname'),
            'new name',
        );

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );

        expect(mockPutReq).toHaveBeenCalled();
    });
});
