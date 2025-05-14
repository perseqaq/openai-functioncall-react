import { createContext, useContext } from "react";

type CaseCtx = {
  actions?: Record<string, any>;
  setActions?: any;
};

const baseCtx: CaseCtx = {
  actions: {},
};

export const ChatContext = createContext(baseCtx);

export const useChatContext = () => {
  const ctx = useContext(ChatContext);
  if (ctx === baseCtx) {
    throw new Error("useChatContext must be used within a ChatContextProvider");
  }
  return ctx;
};
