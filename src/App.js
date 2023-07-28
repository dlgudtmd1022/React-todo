import TodoTemplate from "./components/TodoTemplates";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import {useRef, useState} from "react";

function App() { // 자바랑 자바스크립트는 특성상 리턴하는 자료가 무조건 하나의 구문으로 처리가능해야한다.
  const [todos, setTodos] = useState([ // 초기 객체 리스트 생성
      {
        id : 1,
        text : '리액트의 기초 알아보기',
        checked : false,
      },
      {
        id : 2,
        text : '뿜뿜뿜뿜',
        checked : true,
      },
      {
        id : 3,
        text : '슈퍼샤이 슈펴샤이',
        checked : true,
      },
  ]);

  //useRef()는 상태관리는 받지 않지만 보존되는 값을 생성할때 사용합니다.
  const nextId = useRef(4); // nextId는 4라는 값이 저장되는데 서버를 재시작하기전까지는 렌더링 등을 해도 변경없습니다.ㅈ

    const onInsert = (text) => { // 텍스트를ㄹ 전달받으면, setTodos를 이용해 todos내부 요소를 추가합니다.
    setTodos([...todos, {id: nextId.current, text: text, checked: false}]);
    nextId.current += 1; // 전역 아이디값 1 증가.
    }
  return (
      <TodoTemplate food="pizza">
          {/*children을 TodoTemplate 내부에 선언해놨기때문에, 다른 컴포넌트가 자식요소로 오면 내부에 랜더링해줌,*/}
        <TodoInsert onInsert = {onInsert}/>
        <TodoList todos={todos}/> {/* 초기 표시 데이터 props.todos로 전달*/}
      </TodoTemplate>
  );
}

export default App;