import { useEffect, useState } from "react";
import "./App.css";
import { ChatContext } from "./hooks/chatContext";
import Chat from "./components/Chat";

const App = () => {
  return (
    <ChatContext.Provider value={{ setActions: () => {} }}>
      <div className="content">
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
        <Chat />
      </div>
    </ChatContext.Provider>
  );
};

export default App;
