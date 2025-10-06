- Main focus on functionality

- Task 1:

  - After click on menu button it should collaps
  - create redux store to store state
  - installed redux / redux-store
  - created store
  - created slice
  - provided our store to app

  - How to check out store working fine or not?

    - extension (Redux dev tool)
    - useSelector (subscribing specific part of out code with redux store)

    - store → the whole Redux store
    - store.app → the state managed by appSlice
    - store.app.isMenuOpen → the actual value (true/false)

- Task 2:

  - Created button lists

- Task 3:

  - Build VideoContainer (Accessing data from API)

- Task 4: (setup Routing)

  - what is outlet?
    --> The Outlet component in React Router DOM is a placeholder used within a parent route component to render its child route elements, enabling nested UI to display when child routes are matched.
    It allows for the creation of shared layouts, such as a navigation bar or sidebar, which remain consistent across multiple pages while dynamically rendering different content based on the current route

- Task 5: Making cards clickable

  - used Link component for move to another page
  - also made Home clickable

- Task 6: When i go to video it should automatically colaps sidebar (by default it should close)
  - dispatch an action
  - will create closeMenu action



- Task 7:
  - created watchPage
  - fetching video by video ID using api


- Task 8: Build Search bar
  - Debouncing : 
  - if difference btw 2 key strokes is < 200ms -> Decline API call
  - if difference btw 2 key strokes is > 200ms -> make an API call


  - solved one error 
  - Access to fetch at 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

  - To solve it created proxy server 
  - Now we need to run node server.js also in another terminal --> to run this 


 - Task 9: [Build well organized search] when i go to search & i type same keyword again then it should not make same API call again 

   - if i store search result in array. TC:O(n)
   - if i store search result in object. TC: O(1)

   - Problem is that when i search something then it makes API call but, also when i  backspace or remove from last still it is making API calls 

   