import React, { useState } from "react";

const TodoList = (props) => {
  // 1 -  props 구조분해
  const { todos, setTodos } = props;

  // 2 - 각 List 변수선언 !!
  const fightingList = todos.filter((todo) => !todo.isComplete);
  const completeList = todos.filter((todo) => todo.isComplete);

  // 3 - fightingList 삭제 버튼 핸들
  const handleDeleteBtn = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // 4 - fighting , complete 완료 및 취소 토글 버튼 핸들
  const handleToggleBtn = (id) => {
    setTodos((prev) => {
      return prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      );
    });
  };

  // 5 - Complete 삭제 버튼 핸들
  const handleCompleteDeleteBtn = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <h3>Fighting..🔥</h3>
      <div className="list-container">
        {fightingList.map((todo) => (
          <div>
            <h3>{todo.title}</h3>
            <div>{todo.content}</div>
            <div>{todo.isComplete}</div>
            <button
              className="delete-btn"
              onClick={() => handleDeleteBtn(todo.id)}
            >
              삭제하기
            </button>
            <button
              className="complete-cancel-btn"
              onClick={() => handleToggleBtn(todo.id)}
            >
              완료
            </button>
          </div>
        ))}
      </div>

      <h3>Complete!!🎉</h3>
      <div className="list-container">
        {completeList.map((complete) => (
          <div key={complete.id} className="todo-container">
            <h3>{complete.title}</h3>
            <div>{complete.content}</div>
            <button
              onClick={() => handleCompleteDeleteBtn(complete.id)}
              className="delete-btn"
            >
              삭제하기
            </button>
            <button
              className="complete-cancel-btn"
              onClick={() => handleToggleBtn(complete.id)}
            >
              취소
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
