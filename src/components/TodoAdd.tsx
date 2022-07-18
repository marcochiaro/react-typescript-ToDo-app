import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useTodosContext } from "../store";

function TodoAdd() {
  const { newTodo, setNewTodo, addTodo } = useTodosContext();
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button
        onClick={() => {
          addTodo();
        }}
      >
        Add Todo
      </Button>
    </Grid>
  );
}

export default TodoAdd;
