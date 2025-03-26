

# Episode 07 - Finding the Path

## Coding Assignment:

- Add `Shimmer Effect` without installing a library.
- Install `react-router-dom`.
- Create an `appRouter` and Provide it to the app.
- Create a `Home, About, and Contact Page` with Link (use child routes).
- Make an `Error page` for routing errors.
- Create a `Restaurant Page` with dynamic restaurant ID.
- (Extra) - Create a `login Page` using `Formik Library`.

## Notes:

- useEffect:
    - if no dependency array => useEffect is called on every render
    - if dependency array is empty => useEffect is called on initial render (just once)
    - if we put something in d array => it will only be called when the dependency changes

- useState:
    - Never create the state variables outside of the component.
    - It is used to create local state variable inside the functional component.
    - Always use them on the top -> goof=d practice.
    - dont create them inside if/else block, loops.

- To create Routes:
    - npm js library - react router dom
    - npm i react-router-dom@6.22.0
    - create about us page in app.js
    - make error component
    - to keep header in all pages - make children routes
    - do not use anchor tags while linking pages - coz whole page got refreshed - not a good practice.
    - Use <Link> from react router dom.
    - and that is why our react appl are called single page appl

- Routing in web apps:
    - Client Side Routing - what were doin is csr, all the components are already loaded into our app
    - Server Side Routing - you take a network call, and the html is coming from server

- Make Different Pages for Different Restaurants:
    - this will include dynamic routing.
    - RestaurntMenu component.
    - give dynamic path : /restaurants/:id
    - load dynamic data: use api call: use Hooks: useEffect()
    - useParams Hook to read /:id for each restro


