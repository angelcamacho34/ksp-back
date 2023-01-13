import express from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger_output.json';

const app = express();
const port = 3000;


app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});

// tslint:disable: no-var-requires
require('./controllers/users')(app);
require('./dao/users');
