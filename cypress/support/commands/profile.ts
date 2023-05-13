// В командах описываем только действия (нажал, ввел, отправил и т.д.), проверки здесь писать не надо, все проверки и ожидания пишем в самих тестах!

export const updateProfile = (name: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.Firstname').clear().type(name);
    cy.getByTestId('ProfileCard.Lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: {
        Authorization: 'some',
    },
    body: {
        id: '4',
        name: 'test',
        lastname: 'test',
        age: 18,
        currency: 'RUB',
        country: 'Russia',
        city: 'Sochi',
        username: 'test',
        avatar: 'https://static10.tgstat.ru/channels/_0/12/1207e9a8bc05cb00522bc45c6e57eaca.jpg',
    },
});

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(name: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
