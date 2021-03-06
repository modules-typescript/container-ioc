import { Container, Injectable } from 'container-ioc';

const container = new Container();

@Injectable()
class App {
    constructor(service) {
        this.service = service;
    }
}

container.register([
    { token: App, useClass: App },
    { token: 'IService', useValue: {}}
]);

const app = container.resolve(App);