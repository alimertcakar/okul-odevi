import React from 'react';
import { Container, Item } from "./components/grid.component"
import ProblemSolver from "./components/problem-solver.component";

function App() {
  return (
    <Container>
      <Item><ProblemSolver /></Item>
    </Container>
  );
}

export default App;
