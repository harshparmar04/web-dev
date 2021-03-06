import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todoList";
import ReduxExamples from "./redux-examples";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <h1>TODOs</h1>
            <TodoList/>
            <h1>Non React.js Assignments/Labs</h1>
            <ul>
                <li><a href="labs/a2/index.html">Assignment 2</a></li>
                <li><a href="labs/a3/index.html">Assignment 3</a></li>
                <li><a href="labs/a4/index.html">Assignment 4</a></li>
                <li><a href="labs/a5/index.html">Assignment 5</a></li>
                <li><a href="tuiter/navigation.html">Tuiter</a></li>
            </ul>
            <ReduxExamples/>
        </>
    )
};

export default Labs;
