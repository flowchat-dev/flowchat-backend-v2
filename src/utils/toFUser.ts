// import kakao from '@/connector/kakao';
import FUser from '@/types/user';
import {
  ChatChannel, ChatUser, ChatUserInfo,
} from '@storycraft/node-kakao';

const toFUser = (user: ChatUser, channel: ChatChannel<ChatUserInfo>): FUser | null => {
  const detailedUserInfo = channel.getUserInfoId(user.Id);
  if (!detailedUserInfo) return null;
  return {
    image: detailedUserInfo?.OriginalProfileImageURL
    || detailedUserInfo?.FullProfileImageURL
    || detailedUserInfo?.ProfileImageURL,
    name: detailedUserInfo.Nickname,
    id: user.Id.toString(),
  };
};

export default toFUser;
