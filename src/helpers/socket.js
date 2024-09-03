import { io } from 'socket.io-client';

const isDev = process.env.NODE_ENV === 'development';

const socket = io(isDev ? 'ws://3.14.245.186:8081' : '/');
export default socket;
