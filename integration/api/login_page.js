import user from '../../fixtures/user'

describe('Login ', function () {

    it('Create new user via API', function () {
        cy.request('POST', '/{url}}', {
            nome: user.randomName,
            email: user.randomEmail,
            senha: user.randomPassword
        })
            .then((resp) => {
                expect(resp.status).to.eq(200)
            })
    });

    it('Login with user just created via API', function () {
        cy.request('POST', '/{url}}', {
            email: user.randomEmail,
            senha: user.randomPassword
        })
            .then((resp) => {
                expect(resp.status).to.eq(200)
            })
    });
/// testing negative scenarios
/// loading data from blns.json

    it('Testing list of strings which have a high probability of causing issues via API', function (done) {
        cy.fixture('blns').then((json) => {
            for (let i = 0; i < json.length; i++) {
                cy.request('POST', '/{url}}', {
                    nome: json[i],
                    email: user.randomEmail,
                    senha: user.randomPassword
                })
                    .then((resp) => {
                        console.log(json[i])
                        expect(resp.status).to.eq(200)
                    })
            }
        });
    });
});