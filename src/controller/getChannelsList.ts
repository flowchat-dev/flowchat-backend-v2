import kakao from '@/connector/kakao';
import FChannel from '@/types/channel';
import toFChannel from '@/utils/toFChannel';
import { Request, Response } from 'express';

const getChannelsList = async (req: Request, res: Response) => {
  const channels: FChannel[] = kakao.ChannelManager.getChannelList().map(toFChannel);
  res.send(channels);
};
export default getChannelsList;
