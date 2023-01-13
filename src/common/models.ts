import mongoose from 'mongoose';

export interface ApiResponse {
    status: string;
    data: any;
    message?: string;
}

export interface User {
    id?: string;
    photo: string;
    fullName: string;
    jobPosition: string;
    salary: string;
    status: string;
    hireDate: string;
    beneficiary?: Beneficiary
}

export type Users = User[];
export interface Beneficiary {
    id: string;
    fullName: string;
    relationShip: string;
    birthday: string;
    gender: 'M' | 'F'
}

export const beneficiarySchema = new mongoose.Schema({
    id: String,
    fullName: String,
    relationShip: String,
    birthday: String,
    gender: String
});
// create user schema
export const userSchema = new mongoose.Schema({
    id: String,
    photo: String,
    fullName: String,
    jobPosition: String,
    salary: String,
    status: String,
    hireDate: String,
    beneficiary: beneficiarySchema
});



export const UserResultModel = mongoose.model('users', userSchema);
