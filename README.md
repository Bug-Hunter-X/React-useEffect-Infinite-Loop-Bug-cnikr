# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying the state variable within the hook's callback function without proper dependency management.

## Bug Description
The `MyComponent` component uses `useState` to track a count. The `useEffect` hook attempts to increment the count on every render.  Because the `useEffect` doesn't have any dependencies, it runs repeatedly which leads to an infinite loop and crashes the app.

## Bug Reproduction
Clone this repository and run `npm install` followed by `npm start`. You will observe the browser crashing or the app becoming unresponsive.