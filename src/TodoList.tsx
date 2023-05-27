import React, { useState } from 'react';

// const TodoList = () => {
//   const [text, setText] = useState('');
//   const [todos, setTodos] = useState<object[]>([{}, {}, {}, {}]);

//   const handleAddTodo = () => {
//     if (text.length > 0) {
//       setTodos([...todos, text]);
//       setText('');
//     }
//   };

//   const handleRemoveTodo = (index: number) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <div>
//       <h1>Я пожилая тудушка (тест)</h1>
//       <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
//       <button onClick={handleAddTodo}>+</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button style={{ margin: '5px' }}>Выполнено</button>
//             <button style={{ margin: '5px' }} onClick={() => handleRemoveTodo(index)}>
//               Удалить
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;
