import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {IMessageComponent} from '@entities/dialog';

interface IDialogStore {
  messages: IMessageComponent[];

  addMessage: (value: IMessageComponent) => void;
  setMessages: (value: IMessageComponent[]) => void;
}

export const useDialogStore = create<IDialogStore>()(
  devtools(
    set => ({
      messages: [],
      addMessage: (value: IMessageComponent) =>
        set(state => ({messages: [value, ...state.messages]})),
      setMessages: (value: IMessageComponent[]) => set({messages: value}),
    }),
    {name: 'cardsStore'},
  ),
);
