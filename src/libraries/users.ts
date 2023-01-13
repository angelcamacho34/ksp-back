
import { saveModel, updateModel } from '../common/adapter';
import { User, UserResultModel } from '../common/models';
import { api_response, api_response_error } from '../common/utils';


export function getAllUsers(): Promise<any> {
    return new Promise((resolve) => {
        return UserResultModel.find({}).then(result => {
            resolve(api_response(result));
        }).catch(err => {
            resolve(api_response_error(err));
        });
    })
}

export function createUser(user: User): Promise<any> {
    return new Promise((resolve) => {
        return saveModel(user).then(result => {
            console.log('user created');
            resolve(api_response(result.toJSON()));
        }).catch(err => {
            resolve(api_response_error(err));
        });
    })
}

export function updateUser(user: User): Promise<any> {
    return new Promise((resolve) => {
        return updateModel(user).then(result => {
            console.log('user updated');
            resolve(api_response(result.toJSON()));
        }).catch(err => {
            resolve(api_response_error(err));
        });
    });
}

export function deleteUser(id: string): Promise<any> {
    return new Promise((resolve) => {
        return UserResultModel.findByIdAndDelete({_id:id}).then(result => {
            console.log('user deleted:', id);
            resolve(api_response(result.toJSON()));
        }).catch(err => {
            resolve(api_response_error(err));
        });
    });
}