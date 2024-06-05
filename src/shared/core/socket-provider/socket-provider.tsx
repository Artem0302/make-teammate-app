import React, {ReactNode, useContext, useEffect, useState} from 'react';
import {io, Socket} from 'socket.io-client';
import {useChatStore} from '@entities/chat';
import {useProfileStore} from '@entities/profile';

interface ISocketContext {
  socket: Socket | null;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const SocketContext = React.createContext<ISocketContext>(undefined!);

interface ISocketProviderProps {
  children: ReactNode;
}

export const SocketProvider: React.FC<ISocketProviderProps> = ({children}) => {
  const {name, email, url, birth} = useProfileStore();
  const setChats = useChatStore(state => state.setChats);
  const addMessage = useChatStore(state => state.addMessage);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    if (!email || !birth || !url || !name) {
      return;
    }

    // const newSocket = io('http://178.150.31.9:3000');
    const newSocket = io('http://localhost:3000');

    setSocket(newSocket);

    newSocket.emit('join', {name, email, url, birth});

    newSocket.on('chats', chats => {
      setChats(chats);
    });

    newSocket.on('newMessage', result => {
      addMessage(result.chatId, result.message);
    });

    return () => {
      newSocket.close();
    };
  }, [email, name, url, birth]);

  return (
    <SocketContext.Provider value={{socket}}>{children}</SocketContext.Provider>
  );
};

export const useSocketContext = () => useContext(SocketContext);
