import jwt_decode from 'jwt-decode';

import testFunc from '../index';

const jwt: string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjU4MzY3NDMsImlhdCI6MTUyNTgzNjQ0MywiaWRlbnRpdHkiOiIxZWQzMWQ4ZS04ZGU2LTRhNDAtODhmMi0wZjgxZTc2OTBhMWUiLCJuYmYiOjE1MjU4MzY0NDMsInByb2ZpbGUiOnsiZmlyc3RfbmFtZSI6IkVsaSIsImxhc3RfbmFtZSI6Ikd1bmRyeSIsImVtYWlsIjoiZWxpZ3VuZHJ5K3Rlc3QxQGdtYWlsLmNvbSJ9fQ.nZyALDoxhN8i9Oy1RmDH1JsfmIg63P0Q0dK3zOi54oI";

it('should decode a jwt from inside the function', () => {
    const decoded = testFunc(jwt);
    expect(typeof decoded).toBe('object');
});

it('should also be able to decode a jwt directly', () => {
    const decoded = jwt_decode(jwt);
    expect(typeof decoded).toBe('object');
});
