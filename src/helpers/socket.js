import { io } from 'socket.io-client';

const isDev = process.env.NODE_ENV === 'development';

const socket = io(isDev ? 'ws://3.148.117.74:8081' : '/');//production
// const socket = io(isDev ? 'ws://localhost:8081' : '/');//development3.148.117.74
export default socket;

