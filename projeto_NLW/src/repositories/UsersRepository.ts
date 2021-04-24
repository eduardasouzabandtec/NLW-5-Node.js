import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
class UsersReposirory extends Repository<User>{
    
}

export { UsersReposirory }