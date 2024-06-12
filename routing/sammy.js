$(function() {
    let app = $.sammy(function() {
        this.get('/home', () => {
            $('#root').html('<h1>Home page</h1>');
        });
    });

    app.run();
});