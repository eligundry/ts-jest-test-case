import jwt_decode from 'jwt-decode';

export const testFunc = (jwt: string): object => {
    return jwt_decode(jwt);
}
