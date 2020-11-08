import getEnv from '@/utils/getEnv';
import readline from '@/utils/readline';
import { AuthStatusCode, TalkClient } from '@storycraft/node-kakao';

const kakao = new TalkClient(getEnv('deviceName'), getEnv('uuid'));
const loginWithEnv = () => kakao.Auth.login(getEnv('email'), getEnv('pw'));

export async function login(): Promise<boolean> {
  try {
    await loginWithEnv();
    console.log(`🎉 성공적으로 로그인했습니다! (${getEnv('email')})`);
    return true;
  } catch (e) {
    console.log('❌ 로그인에 실패했습니다');
    if (e.status === AuthStatusCode.DEVICE_NOT_REGISTERED) {
      console.log('아직 FlowChat이 계정에 등록되지 않았습니다.');
      kakao.Auth.requestPasscode(getEnv('email'), getEnv('pw'));
      const passcode = await readline('전송된 인증번호를 입력해주세요 : ');
      await kakao.Auth.registerDevice(passcode, getEnv('email'), getEnv('pw'), true);
      const loginRequest = await login();
      return loginRequest;
    }
    return false;
  }
}

export default kakao;
