

# Episode 11 - Data is the new oil

## Theory:

### Topics Covered:

- Seperation of a React Application into UI-Layer and Data-Layer
- Controlled and Uncontrolled Components
- Prop Driling
- Context API in React

### Notes:

- Higher Order Components:
    - is a function that takes a component and returns a component.
    - takes a component and enhances it (add some extra features to it) and returns it.
    - promoted labels on restaurant cards
    - this promoted section is not present in our api, so we'll use isopen ( is restro open)

- Controlled & Uncontrolled Components:
    - React Appl has 2 layers - Data Layer and UI Layer.
    - this ui layer is powered by the data layer
    - data layer consists of the states, props, local variables
    - We'll be building restro menu section.
    - built accordian from scratch
    - controlled component: rescategory controlled by resmenu for showing items (accordian) 

- Lifting the state up:
    - first we made the accordian where wherever  we click it will open but the others will reamin open open too
    - now if we want to make such that if we open a category others will close
    - since the categories are mapped so we have to go to its parent component.
    - and use the state variable of parent in child so pass it as prop

- Props Drilling:
    - passing props through heirarchy
    - (dummy data) =. resmenu => rescard => itemlist => console
    - so this is a problem inside react
    - we should avoid props drilling
    - problem statement: our datais present somewhere and we want to use it somewhere else
    - react gives us a super power called as react context to avoid props drilling
    - eg to use logged in user info (which should be present in oversll app), light/dark theme

- Use Context:
    - in userContext in utils
    - createContext from react library
    - we can acees thiscontext anywhere in the app
    - we can acess that info using a react hook - useContext
    - should we keep all the data inside the context and not use the props at all?
    - no, only the data that'll be used in multiple places should be kept inside the context
    - can we use this context in about page? but that was a class based component and it doesnt have hooks.
    - for that we use UserContext.Consumer

- Context Provider:
    - If we want to modify our context for eg our authentication logic
    - use Context Provider
    - App.js
    - wrap the whole app inside it and we can provide whaterver value to it
    - input box in body to change username
    - so we have to update the username (in app.js) from the input box (in body.js) 
    - by passing setUsername state variable to Provider value
    - Redux is aextenal state management library which is not inside react
    - if we're building small size appl we dont even need redux

