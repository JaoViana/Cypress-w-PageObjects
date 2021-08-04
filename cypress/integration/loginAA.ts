it('Login with app actions', () => {
    cy
        .visit('/')
    cy
        .window()
        .then(({app}) => {
            app.showLoginModule = true;
        })
})