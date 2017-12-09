import { } from './director.min.js'
import { componentOne } from 'http://localhost:8081/components/one/one.component.js';
import * as controllerOne from 'http://localhost:8081/components/one/one.controller.js';

function bootstrapVueComponents() {
    let tmpWidget;

    if(tmpWidget) {
        tmpWidget.$destroy();
    }

    tmpWidget = new (Vue.extend(componentOne));
    document.querySelector('.spa-body').innerHTML = "<div id='widget-one'></div>";
    tmpWidget.$mount('#widget-one');

    return tmpWidget;
}

function pageOne() {
    console.log('got to page one');

    let tmpWidget = bootstrapVueComponents();

    controllerOne.render(tmpWidget);
}

function pageTwo() {
    console.log('got to page two');

    document.querySelector('.spa-body').innerHTML = "";
}

function pageThree(name) {
    console.log('the name of the page is: ' + name);

    let tmpWidget = bootstrapVueComponents();

    tmpWidget.message = name;
}

var routes = {
    '/page-one': pageOne,
    '/page-two': pageTwo,
    '/pageThree/:name': pageThree
};

var router = Router(routes);

router.init();