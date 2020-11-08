import getChannelsList from '@/controller/getChannelsList';
import { Router } from 'express';

const channel = Router();
channel.get('/', getChannelsList);

export default channel;
