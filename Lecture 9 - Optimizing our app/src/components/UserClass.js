// its a normal js class
// it has a render method which returns jsx
// React.component is a class which is given to us by react
// to recieve the props we will create a constructor
// super is used to call the constructor of the parent class
// this.props is used to access the props
// in this state is created whenever the instance of class based component is loaded
// constructor is the best place to create the state
import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = { // this is how we create a state variable inside a class based component
            // this state is a big object that contains all the state variables
            count: 0,
            count2: 1,

            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "https://dummy.com",
            }
        }

        console.log("Child Constructor Called");
    }

    // Component Did Mount is used to fetch API calls
    // Why?
    // in functional cmpnt we use useEffect which takes callback fn and a dependency array
    // we do it in useeffect beacuse we want to fetch the data only when the component is mounted
    // first we load the component with basic details and then we fetch the data
    // we dont want to render the data and the make the api call and then fill data in the component
    // instead react want to make the api call only when the component is mounted
    async componentDidMount() {
        console.log("Child Component Did Mount");

        // Api calls
        // make component did mount async
        const data = await fetch("https://api.github.com/users/kshatsharmaaa")
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

        console.log(json);
        // to use this data in the component we need to update the state
    }


    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render() {
        console.log("Child Render Called");
        return (
            <div className="user-card">
                <h1>Class Count: {this.state.count}</h1>
                <button onClick={() => {
                    // NEVER UPDATE STATE VARIABLES DIRECTLY
                    this.setState({
                        // this object contains the updated state variables
                        // this can be used to update multiple state variables
                        count: this.state.count + 1,
                        count2: this.state.count2 + 2,
                    })
                }}>count increase</button>
                <h1>Class based component!</h1>
                <h1>Class Count2: {this.state.count2}</h1>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: indore</h3>
                <h4>Contact: @kshatsharmaaa</h4>
                <p>----------------------------------------</p>
                <h2>Name: {this.state.userInfo.name}</h2>
                <img src={this.state.userInfo.avatar_url} alt="avatar"/>
            </div>
        )
    }
}

export default UserClass; 


// how this class based component is mounted/loaded in the dom
/*
whenever a class is instantiated the constructor is called
then the render method is called
then the component is mounted in the dom
*/



/*****
 * 
 * --- MOUNTING ---
 * 
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy>
 * ComponentDidMount
 *      <API call>
 *      <this.setState> -> state variable is updated
 * 
 * --- UPDATE ---
 * 
 * Render(Api data)
 * <HTML Updated>
 * Component Did Update
 * 
 */