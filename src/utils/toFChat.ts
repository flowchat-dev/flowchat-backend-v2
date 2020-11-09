import FChat from '@/types/chat';
import { Chat } from '@storycraft/node-kakao';
import toFUser from './toFUser';

const toFChat = (chat: Chat): FChat => ({
  timestamp: chat.SendTime,
  text: chat.Text,
  sender: toFUser(chat.Sender, chat.Channel),
  id: chat.LogId.toString(),
});

export default toFChat;
