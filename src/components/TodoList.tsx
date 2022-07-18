import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { useTodosContext } from "../store";

function TodoListItems() {
  const { todos, updateTodo, toggleTodo, removeTodo } = useTodosContext();
  return (
    <>
      {todos.map((todo: { id: number; text: string }) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => toggleTodo(todo.id)} />
          <Input
            mx={2}
            value={todo.text}
            onChange={(e) => updateTodo(todo.id, e.target.value)}
          />
          <Button onClick={() => removeTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
