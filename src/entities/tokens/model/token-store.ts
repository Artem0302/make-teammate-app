import {create} from 'zustand';
import {devtools} from 'zustand/middleware';

interface IGoogleStore {
  access_token: string;

  setAccess_token: (value: string) => void;
}

export const useGoogleStore = create<IGoogleStore>()(
  devtools(
    set => ({
      access_token: '',

      setAccess_token: (value: string) => set({access_token: value}),
    }),
    {name: 'dialogStore'},
  ),
);
