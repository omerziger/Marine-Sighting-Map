import React from "react";

import Container from "./components/Container/Container";
import MapWraper from "./components/OL/MapWraper";
import Search from "./components/Search/Search";

export default function App() {
  return (
    <Container>
      <MapWraper />
      <Search />
    </Container>
  );
}
