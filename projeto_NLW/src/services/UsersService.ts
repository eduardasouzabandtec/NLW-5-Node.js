import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersReposirory } from "../repositories/UsersRepository"



class UsersService{
    private usersRepository: Repository<User>;
    
    constructor() {
        this.usersRepository = getCustomRepository(UsersReposirory);
    }
    
    async create(email: string){

        // verificar se o user existe
        const usersExists = await this.usersRepository.findOne({
            email
        })
        

         // se existe retorna user
        if(usersExists) {
            return usersExists;
        }
        const user = this.usersRepository.create({
            email,
        });
        await this.usersRepository.save(user);

        //se não existir, cadastrar no DB
         return user;
       
    }
    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({ email });
      
        return user;
      }

}

export { UsersService }