$(function() {
    let app = $.sammy(function() {
        this.get('/home', () => {
            $('#root').html('<h1>Home page</h1>');
        });
        this.get('/about', () => {
            $('#root').html('<h1>About page</h1>');
        });
        this.get('/contacts', () => {
            $('#root').html('<h1>Contacts page</h1>');
        });
        this.get('/login', () => {
            $('#root').html('<h1>Login page</h1>');
        });
    });

    app.run();
});