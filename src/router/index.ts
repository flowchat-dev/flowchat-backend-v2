import { Router } from 'express';
import channel from './channel';

const index = Router();
index.use('/channel', channel);
export default index;
