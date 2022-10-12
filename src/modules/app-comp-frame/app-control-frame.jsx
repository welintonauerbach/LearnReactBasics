import React from "react";
import "./app-control-frame.css";

export default props =>
<div className="app-control-frame">
    <h3>{props.frameName}</h3>
    {props.children}
</div>