import { ApiResponse } from "./models";

export function api_response(data: any): ApiResponse {
    return { status: 'success', data: Array.isArray(data) ? [...data] : { ...data } };
}

export function api_response_error(data: any, message = 'Error was found'): ApiResponse {
    return { status: 'error', data: (typeof data === 'string') ? data : { ...data }, message };
}