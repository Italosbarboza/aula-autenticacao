import { getRepository } from 'typeorm';
import User from '../entities/User';
import { sign } from 'jsonwebtoken';
import auth from '../../../config/auth';

interface IResponse {
    user: User;
    token: string;
}

interface IRequest {
    login: string;
    pswd: string;
}

class AuthenticateService  {
    public async execute({login, pswd}: IRequest): Promise<IResponse> {
        const userRepository = getRepository(User);
        
        const user = await userRepository.findOne({where: {login}});

        if(!user) {
            throw new Error("Login ou senha incorreta");
        }

        if(user.pswd !== pswd) {
            throw new Error("Login ou senha incorreta");
        }

        const token = sign({}, auth.jwt.secret, {
        subject: String(user.id),
        expiresIn: auth.jwt.expiresIn,    
        });

        return {user, token};
    }

}

export default AuthenticateService;