// tslint:disable-next-line: no-var-requires
const swaggerAutogen = require('swagger-autogen')();

const outputFile = 'src/swagger_output.json';
const endpointsFiles = ['src/controllers/users.ts'];


const doc = {
    info: {
        version: "0.0.1",
        title: "My KSP API",
        description: "Documentation for KSP Test API",
        contact: {
            email: "kmacho.an.34@gmail.com"
        }
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Users",
            "description": "Endpoints for getting Users"
        }
    ],
    definitions: {
        api_response: {
            status: "success",
            data: {},
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('../app');
});