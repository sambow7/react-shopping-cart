# Notes

## The difference between state and props summarized

### State

State holds information owned by that component.
State can be modified with hooks.
When changed, it causes a component and all of its children and their children to re-render.

Examples of state include:

- An object representing the logged-in user.
- An array of todo objects.
- A boolean representing whether a component’s detail panel should be visible.
- A number representing the selected or current index of an item in an array.

### Props

Props hold the information passed down the component hierarchy.
Props cannot be modified.
Since props cannot be changed, methods can be passed through props that will update state on the component that owns the state.
