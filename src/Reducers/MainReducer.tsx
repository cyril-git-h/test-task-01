const initialState: any = {
    users: [],
}


export function Reducer(state = initialState, action: any) {
    switch (action.type) {
        case "ADD_USERS":
            return {
                users: [...state.users, ...action.payload],
            };
        case "DELETE_USER":
            return {
                users: state.users.filter((user:any) => user.id !== action.payload),
            };
        default:
            return state;
    }
}
