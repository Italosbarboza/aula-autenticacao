import { getRepository } from 'typeorm';
import User from '../entities/User';


class GetService  {
    public async execute(): Promise<User[]> {
        const userRepository = getRepository(User);
        
        const user = await userRepository.find();

        return user;
    }

}

export default GetService;