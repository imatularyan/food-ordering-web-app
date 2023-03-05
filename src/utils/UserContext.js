import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: 'Atul Aryan',
        age: '25',
    }
}
);

export default UserContext;