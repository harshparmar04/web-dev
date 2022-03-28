import TodoItem from "./todoItem";
import todos from "./todos.json";
const TodoList = () => {
    return(
        <ul>
            {
                todos.map(todo => {
                    return(
                        <li key={todo.title}>
                            <TodoItem todo={todo}/>
                        </li>
                        );
                })
            }
        </ul>
    );
}
export default TodoList;
