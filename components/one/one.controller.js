export function render (component) {
    $.getJSON({
        url: 'https://httpbin.org/get',
        success: function(data){
            component.obj = data;
        }
    })
}