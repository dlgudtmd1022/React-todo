import React from 'react';
import TodoListItem from "./TodoListItem";
import styles from "./TodoList.module.css"

// props로 전달된 todos를 이용해 map형식으로 출력해주세요.
const TodoList = (props) => {

    const TodoListItems = props.todos.map(todo => {
        return <TodoListItem todo={todo} key={todo.id}/>
    })
    return(
        <div className={styles.TodoList}>
            {TodoListItems}
        </div>
    );
};

export default TodoList;