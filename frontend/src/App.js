import "./App.css";
import { Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/chats" element={<Chat />} />
      </Routes>
      {/* <Button colorScheme="blue">Button</Button> */}
    </div>
  );
}

export default App;
