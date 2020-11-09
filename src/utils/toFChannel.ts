import { ChatChannel } from '@storycraft/node-kakao';
import toFChat from './toFChat';

const toFChannel = (channel: ChatChannel) => ({
  name: channel.Name || channel.DisplayUserInfoList.map((e) => e.Nickname).join(', '),
  id: channel.Id.toString(),
  lastChat: channel.LastChat && toFChat(channel.LastChat),
});
export default toFChannel;
