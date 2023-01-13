import { User } from "../common/models";
import { api_response_error } from "../common/utils";
import { createUser, deleteUser, getAllUsers, updateUser } from "../libraries/users";
const bodyParser = require('body-parser');
const cors = require('cors');

const baseURL = '/api/v1/users';
module.exports = (app) => {
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
    app.use(cors({
        origin: '*'
    }));

    app.get(`${baseURL}/getAll`, (req, res) => {
        // #swagger.tags = ['Users']
        // #swagger.description = 'Gets all users'
        getAllUsers().then(response => {
            res.send(response);
        })
    });

    app.post(`${baseURL}/create`, (req, res) => {
        // #swagger.tags = ['Users']
        // #swagger.description = 'Create new User'
        if (req.body) {
            const user: User = { ...req.body };
            createUser(user).then(response => {
                res.status(201);
                res.send(response);
            })
        } else {
            res.status(400);
            res.send(api_response_error(null, 'You must provide a user'));
        }
    });

    app.post(`${baseURL}/update`, (req, res) => {
        // #swagger.tags = ['Users']
        // #swagger.description = 'Update a User'
        if (req.body && req.body.id) {
            const user: User = { ...req.body };
            updateUser(user).then(response => {
                res.status(200);
                res.send(response);
            })
        } else {
            res.status(400);
            res.send(api_response_error(null, 'You must provide a existant user'));
        }
    });

    app.delete(`${baseURL}/delete/:id`, (req, res) => {
        // #swagger.tags = ['Users']
        // #swagger.description = 'deletes user based on its Id'
        // #swagger.parameters['id'] = { description: 'User Id' }
        const id = req.params.id;
        if (id) {
            deleteUser(id).then(response => {
                res.send(response);
            });
        } else {
            res.status(404);
            res.send(api_response_error(null, 'You must provide an id'));
        }
    });
}
