import React from 'react';
import {MdCheck, MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from "react-icons/md";
import styles from './TodoListItem.module.css'


// props.todo로 전달받은 객체 데이터 {id:아이디값, text:text값, checked:bool자료형}
const TodoListItem = (props) => {
    return(
        <div className={styles.TodoListItem}>
            <div className={styles.checkbox}>
                {/*삼항 연산자로 체크여부를 따져서 체크된 아이콘이 보일지 아닌면 체크안된 아이콘이 보일지 결정*/}
                {props.todo.checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className={styles.text}>{props.todo.text}</div>
            </div>
            <div className={styles.remove}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
}

export default TodoListItem;