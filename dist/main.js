"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const express_1 = require("express");
const app_module_1 = require("./app.module");
let server;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, express_1.json)({ limit: '10mb' }));
    app.use((0, express_1.urlencoded)({ extended: true, limit: '10mb' }));
    app.enableCors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API Dokumentasi')
        .setDescription('Dokumentasi endpoint API untuk aplikasi kamu')
        .setVersion('1.0')
        .addTag('auth')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.init();
    return app.getHttpAdapter().getInstance();
}
async function handler(req, res) {
    if (!server) {
        const instance = await bootstrap();
        server = instance;
    }
    server.emit('request', req, res);
}
//# sourceMappingURL=main.js.map