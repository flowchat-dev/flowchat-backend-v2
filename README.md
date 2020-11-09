# FlowChat Backend
멀티디바이스 지원 메시징 서비스 FlowChat의 백엔드입니다. 기존 코드의 유지보수가 힘들다고 생각하여 새 프로젝트로 이전합니다.

# How to run?
아직 배포용 스크립트는 작성되지 않았습니다. package.json에 등록되어있는 개발용(dev) 스크립트로 테스트를 할 수 있습니다.
```bash
npm i
npm run dev
```

# Tech Stack
- Runtime : NodeJS (tested with v12.18.4)
- Transpiler : typescript
- libraries :
    - typescript
    - ts-node
    - @storycraft/node-kakao (3.1.0-preview.0)
    - dotenv
    - express
    - ws