import { User, UserResultModel } from './models';

/**
 * Stores a model from a json
 * @param user JSON with data to be stored in database
 */
export function saveModel(user: User) {
    let store = { ...user }
    if (!user.beneficiary) {
        store = { ...user, beneficiary: null }
    }
    const userToStore = new UserResultModel({ ...store });
    return userToStore.save();
}
export function updateModel(user: User) {
    let store = { ...user };
    delete store.id;
    if (!user.beneficiary) {
        store = { ...user, beneficiary: null }
    }
    return UserResultModel.findByIdAndUpdate(user.id, { ...store }, { new: true, upsert: true });
}