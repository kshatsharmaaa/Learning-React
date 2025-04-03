// show theinformation of team members using class based component
// fetch data from github profile and show it
// first make the functional component and then convert it into class based component
// functional user component - User.js
// class based user component - UserClass.js

import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

// const About = () => {
//     return (
//     <div>
//         <h1>About</h1>
//         <h2>This is Namaste React WebSeries</h2>
//         <User name={"akshat sharma (functional component)"}/>
//         <UserClass name={"akshat sharma (class component)"}/>
//     </div>
//     )
// }

class About extends Component {

    constructor(props) {
        super(props);

        console.log("Parent Constructor Called");
    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

    render() {
        console.log("Parent Render Called");    
        return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React WebSeries</h2>
            {/* useContext in class component */}
            <div className="">
                LoggedIn User: 
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <User name={"akshat sharma (functional component)"}/>
            <UserClass name={"akshat sharma (class component)"}/>
        </div>
        );
    }
}

export default About;

// RENDER PHASE ---------------------------------------------------------

// if there are two child components 
// parent constructor
// parent render
// child 1 constructor
// child 1 render
// now instead of calling child1 did mount react optimises here and goes to child 2
// child 2 constructor
// child 2 render

// COMMIT PHASE ---------------------------------------------------------
// DOM UPDATED IN SINGLE BATCH

// child 1 did mount
// child 2 did mount
// parent did mount