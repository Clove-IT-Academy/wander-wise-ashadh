import { create } from './user.js';
import { generateAccessToken } from '../config/jwt.js';

export const register = async (data) => {
    const user = await create(data);
    return generateAccessToken({ userId: user._id });
}
