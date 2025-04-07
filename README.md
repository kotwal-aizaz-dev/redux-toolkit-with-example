# Redux Toolkit

It is used for state management. 

Used over Redux as it reduces the initial code setup required by Redux. 

Parts of RTK ⇒ 

Store - Contains various reducers, middleware, etc.

We need to provide the store to the app just like we do with the context. 

 
Slice — The store stores the state by dividing it into multiple reducers. This is used to separate concerns. Each reducer handles a part of the state. Slice is used to create a reducer and its actions.

 
Actions - Are functions used to interact with the state through a slice. 
Structure of the action - ({type: "Increment", payload: data}), payload is an optional argument. 

Reducer - Is a part of a Redux slice. Through this, the redux store has access to one of its states. 

Pointers - 

Redux never mutates the state directly.
It makes a copy of the state and then interacts with it. (This happens internally.)

It is important to add types for states and actions.  

Typical Redux workflow → 
Store -> Slice -> state -> reducers -> actions

Component -> use Selector -> state

component -> dispatch -> action -> update the state

Async actions / Thunks → 

An async function that can be used for async actions. 

Async actions are a part of the extra Reducers in the create slice function. 

Flow → 

component → dispatch → async function → async reducers → pending → action → fulfilled → action
