import otherUserReducer from '../reducers/otherUserReducer';

describe('INITIAL_STATE', () => {
    test('is correct', () => {
        const action = { type: 'dummy_action', payload: null };
        const initialState = {
            user: {
                id: 0,
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                photo: ""
            }
        };

        expect(otherUserReducer(undefined, action)).toEqual(initialState);
    })
})