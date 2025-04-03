

# Episode 12 - Let's Build Our Store

## Theory Assignment:

- Advantages of using Redux Toolkit over Redux
- Explain Dispatcher.
- Explain Reducer.
- Explain Slice.
- Explain Selector.
- Explain createSlice and the configuration it takes.

## Notes:

- How we can manage state of our application using redux?
- Redux works in the data layer of our appl.
- Redux is not mandatory.
- small appls dont really need it.
- react and redux are separate libraries.
- another library zustand does the same thing.
- Redux offers easy debugging.
- It works with other libraries and frameworks as well.
- 2 libraries redux team offers:
    - React - Redux (older way)
    - React toolkit (new way -- we'll be using this)
- We'll be building Cart feature using redux

## Redux Theory:

- Suppose our webiste has a cart option that can have multiple items. Items have a add button
- we can assume redux store is a big object and it is placed at the global central space.
- it have slices inside it, so that it doesnt get so big
- if we want to add cart dqta in the redux store we will create a separate slice for it.
- these are logical structures
- initially this cart can be empty
- redux says that u cant directly modify your cart slice
- when we click on the Add+ button it dispaches an action => after that it calls a function => and this function modifies the cart
- This function is known as the REDUCER
- Summary: Button Clicked => Dispatches an Action => Calls a Reducer fn => modify the cart (updates the slice of our redux store).
- Now suppose i want to read the data: to show no of cart items in header.
- for that we use something known as a selector
- this selector will read the data from the redux store and it will modify in our react component.
- when we use Selector -> this phenomenon is known as SUBSCRIBING TO THE STORE 
- it means the header cmpnt is in sync with the store

- Click (Add+) ---> Dispatch (Action) ---> Reducer (function) ---> Redux (slice) --> Selector (subscribing to the store) --> Cart (updation)

## Redux Toolkit:

- Install @redux/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch (action)
- Selector
- We'll build our store in utils/appStore


## Notes Continued: 

- We'll use a function configureStore to create our store from redux toolkit
- Provide this store in App.js for that we'll be needing a provider from react-redux
- Wrap our whole app within the provider
- lets create a cartslice using createslice fn that takes a configuration to create a slice
- to read the data we use selector and a selector is nothing but a hook inside react
- in itemlist  there's a add+ button => dispatch an action
- hook - useDispatch
- import additem action and dispatch it inside the fn
- to show the items in cart page we have to read the data using useSelector (subscribing to the store)
- clear cart using dispach function
- Whenever you are using selector make sure you are using right portion of the store otherwise it will be a bigperformance loss

