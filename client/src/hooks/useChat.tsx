import { useEffect, useState } from "react";

const useChat = (handler: any, name: string) => {
  const [messages, setMessages] = useState("");
  const [actions, setActions] = useState<Record<string, any>>({}); // Record<string, any> 表示一个对象，key 是 string，value 是 any

  const sendMessage = (message: string) => {
    setMessages(message);
  };

  useEffect(() => {
    if (!messages || messages === "") return;
    fetch("http://localhost:3010/chat", {
      method: "POST",
      body: JSON.stringify({
        prompt: messages,
        tools: [actions],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const callFunction =
          data.data["choices"]["0"]["message"]["tool_calls"]["0"]["function"];
        if (callFunction.name === name) {
          handler(callFunction.arguments);
        }
      });
  }, [messages, actions]);

  return {
    sendMessage,
    setActions,
  };
};

export default useChat;
