import getEnv from '@/utils/getEnv';
import app from './app';

const port = +getEnv('PORT', '5500');
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
