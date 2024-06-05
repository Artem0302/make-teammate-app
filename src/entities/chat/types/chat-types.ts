export interface IMessageComponent {
  sender: string;
  content: string;
  timestamp: string;
}

export interface IChat {
  chatId: string;
  emails: string[];
  messages: IMessageComponent[];
}
