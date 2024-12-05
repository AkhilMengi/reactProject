import React from 'react';
import ReactDOM from 'react-dom/client'

const heading = React.createElement("h1", {"key":1,id:"heading1"}, "Hello World i know react now")
const heading2 = React.createElement("h1", {"key":2,id:"heading1"}, "Hello World i know react now2")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render([heading, heading2])


