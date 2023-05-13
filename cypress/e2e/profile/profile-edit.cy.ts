let profileId: string;

describe('The user opened the profile page', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${profileId}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('Successful profile loading', () => {
        cy.getByTestId('ProfileCard.Firstname').should('have.value', 'test');
    });

    it('The user edits the profile', () => {
        const newName = 'new';
        const newLastname = 'lastname';
        cy.updateProfile(newName, newLastname);
        cy.getByTestId('ProfileCard.Firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.Lastname').should(
            'have.value',
            newLastname,
        );
    });
});
