import {createContext} from 'react'

const UserContext = createContext({
    loggedInUser: "Default User",
});

export default UserContext;

// we can acees thiscontext anywhere in the app