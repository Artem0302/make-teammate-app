import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {IChat, IMessageComponent} from '@entities/chat';

interface IChatStore {
  chats: IChat[];

  addMessage: (chatId: string, message: IMessageComponent) => void;
  setChats: (value: IChat[]) => void;
}

export const useChatStore = create<IChatStore>()(
  devtools(
    set => ({
      chats: [],

      addMessage: (chatId: string, message: IMessageComponent) =>
        set(state => {
          let updatedChats = [...state.chats];

          updatedChats = updatedChats.map(chat => {
            if (chat.chatId === chatId) {
              const updatedMessages = [message, ...chat.messages];

              return {...chat, messages: updatedMessages};
            }

            return chat;
          });

          return {chats: updatedChats};
        }),

      setChats: (value: IChat[]) => set({chats: value}),
    }),
    {name: 'dialogStore'},
  ),
);
