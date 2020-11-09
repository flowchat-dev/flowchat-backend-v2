import FChat from './chat';

interface FChannel {
    name: string;
    id: string;
    lastChat: FChat | null
}
export default FChannel;
