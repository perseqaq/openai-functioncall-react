import { useState } from "react";
import useChat from "../../hooks/useChat";

const Chat = () => {
  const handler = () => {
    setCount(Math.random() * 100);
  };

  const name = "change_count";

  const { setActions, sendMessage } = useChat(handler, name);

  const [count, setCount] = useState(0);

  const setHandler = () => {
    const actions = {
      type: "function",
      function: {
        name: name,
        description:
          "修改或更新一个名为 'count' 的计数器的当前值。当用户表达想要改变此计数值的意图时使用。",
        parameters: {
          type: "object",
          properties: {},
          required: [],
        },
      },
    };

    setActions(actions);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handler}>RANDOM</button>
      <button onClick={() => sendMessage("我想修改count")}>SEND MESSAGE</button>
      <button onClick={setHandler}>HANDLER</button>
    </div>
  );
};

export default Chat;
