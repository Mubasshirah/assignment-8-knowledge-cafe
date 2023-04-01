import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='QnA'>
        <h2>Question Answer Section</h2>
        <h4>What are the difference between props and state?</h4>
        <p style={{marginLeft:'10px'}}>   Props are data passed into a component from its parent component. They are read-only and cannot be changed within the component. <br />

State, is data that is managed internally by a component. It represents the current state of the component and can be changed over time, usually due to user interactions or other events. Unlike props, state can be updated within the component, typically using the setState() method.</p>
        <h4>How does useState work?</h4>
        <p style={{marginLeft:'10px'}}>In React, useState is a hook function that allows a functional component to have state variables. It works by returning an array with two elements: the first element is the current state value, and the second element is a function to update the state value.</p>
        <h4>What else useEffect do except loading data?</h4>
        <p style={{marginLeft:'10px'}}>
        The useEffect hook in React is not just limited to loading data. It can be used for a wide range of scenarios, including:
<br />
Fetching data: useEffect can be used to make network requests to fetch data from an API or server.
<br />
Updating the document title: useEffect can be used to update the document title dynamically based on the state of the component.
<br />
Event listeners: useEffect can be used to add or remove event listeners to the document or specific elements.
<br />
Animations: useEffect can be used to trigger animations when a component mounts or updates.
<br />
Updating state variables: useEffect can be used to update state variables based on certain conditions.
<br />
Cleaning up resources: useEffect can be used to clean up resources such as timers, intervals, and event listeners when the component unmounts.
<br />
Log analytics: useEffect can be used to log analytics data or track user interactions.
        </p>
        <h4>How does react work?</h4>
        <p style={{marginLeft:'10px'}}>
        React is a JavaScript library for building user interfaces. It follows a declarative approach to building UIs, which means that you describe the desired end result and let React handle the details of updating the UI when the state changes.
<br />
Here's a high-level overview of how React works:
<br />
Components: React applications are built using components, which are reusable pieces of code that define how a part of the UI should be rendered. Components can be functional or class-based and can receive input data via props.
<br />
Virtual DOM: React uses a virtual representation of the DOM to optimize performance. When the state of a component changes, React updates the virtual DOM and calculates the minimum number of changes needed to update the actual DOM.
<br />
Reconciliation: Once React has calculated the minimum number of changes needed to update the actual DOM, it performs a process called reconciliation, where it updates only the parts of the DOM that have changed.
<br />
One-way data flow: React follows a one-way data flow model, where data flows from parent components to child components via props. When a component's state changes, React re-renders the component and any child components that depend on the changed state.
<br />
Hooks: React introduced Hooks in version 16.8, which allow functional components to have state and perform side effects. Hooks provide a more elegant way to manage state and lifecycle methods in functional components.
<br />
Server-side rendering: React can also be used for server-side rendering, where the initial HTML for the page is generated on the server and then sent to the client. This can improve the performance of web applications, especially for users with slow internet connections.
<br />
In summary, React provides a declarative approach to building UIs, uses a virtual DOM to optimize performance, follows a one-way data flow model, and supports server-side rendering.




        </p>

    </div>
);
};

export default Blog;