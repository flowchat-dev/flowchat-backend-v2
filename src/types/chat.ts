import FAttach from './attach';
import FUser from './user';

interface FChat {
    text: string;
    timestamp: number; // 타임스탬프
    attaches?: FAttach[],
    sender: FUser | null,
    id: string;
}

export default FChat;
