

# Episode 06 - Exploring the world

## Coding Assignment:

- Play with the `useEffect Hook` to see when it is called? (before or after render)
- Play with the `dependency array` in useEffect Hook.
- Play with the `developer console` by putting a `debugger` in render and `useEffect`.
- Call an `actual API call`.
- `Handle Error` in your `API call`.
- Build `Shimmer UI` when data is not loaded.
- `Render your UI` with actual API data.
- Make `Search functionality` work.
- Make a `Login Logout` button that toggles with a state.

## Notes:

- Monolith Architecture: traditionally when apps were developed
    - code of API
    - UI code
    - Auth
    - DB
    - SMS
    - Everything inside the same project
    - if we have to chnge anything small, we have to update whole project

- Solution: Microservices Architecture (nowdays)
    - each and every service has its own job

- Two ways to fetch data from backend
    - 1) as soon as our app loads -> we can make a API call -> Render it to UI
    - 2) as soon as page loads -> Render it. -> now make an API call -> Re render.
    - in react we'll always be using the second approach. better ux. because in approch 1 till the api calls is made our page is frozen. thats a poor ux. and also react render cycles are very fast. so it doesnt matter how many times we render.


- Why we need UseState Variable instead of local Varible?
    - login/logout btn example - as soon as we click it, it should change to logout button and if clicked again, it should revert to login
    - so if we do this using local variable and onclick, the btnName is updated in console but not reflected in UI.
    - this is why we need state variable to change something in our component dynamically
    - also note this : when we click the button the rerendrs the whole header component instead of btn only


- What we did:
    - useEffect to use fetch api 
    - Shimmer Ui for loading screen
    - useState for login/logout
    - search functionality

- WHENEVER YOU CHANGE THE LOCAL STATE VARIABLE REACT RE RENDERS THE COMPONENT

