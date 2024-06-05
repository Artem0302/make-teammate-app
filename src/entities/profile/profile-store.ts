import {create} from 'zustand';
import {devtools} from 'zustand/middleware';

interface IProfileStore {
  email: string;
  name: string;
  url: string;
  birth: string;

  setEmail: (value: string) => void;
  setName: (value: string) => void;
  setUrl: (value: string) => void;
  setBirth: (value: string) => void;
}

export const useProfileStore = create<IProfileStore>()(
  devtools(
    set => ({
      email: '',
      name: '',
      url: '',
      birth: '',

      setEmail: (value: string) => set({email: value}),
      setName: (value: string) => set({name: value}),
      setUrl: (value: string) => set({url: value}),
      setBirth: (value: string) => set({birth: value}),
    }),
    {name: 'dialogStore'},
  ),
);
