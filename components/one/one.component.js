export var componentOne = {
    template: `
        <div class="wrapper">
            <h2>This is Widget One</h2>
            <p>{{message}}</p>
            <p>{{obj.origin}}</p>
        </div>
    `,
    data: function () {
        return {
            message: 'Hello Vue!',
            obj: {}
        }
    }
};