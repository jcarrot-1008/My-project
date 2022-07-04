import { Resolver, Query, Mutation, Arg, FieldResolver, Root} from 'type-graphql';
import bcrypt from 'bcrypt';
import { User } from '../../entity/User'
import { ApolloError } from 'apollo-client'
import { getConnection } from 'typeorm';


@Resolver(User)
export class RegisterResolver{
    @Query(()=>User, {nullable: true})
    async hello(
        @Arg('email') email: string,
        @Arg('password',{nullable: true}) password: string)
        {
        try {
        const selectUser = await getConnection()
        .createQueryBuilder()
        .select('user')
        .from(User, 'user')
        .where("user.email = :email", {email})
        .getOne()

        if(!!selectUser) {
            const same = bcrypt.compareSync(password, selectUser.password)
            if(same) {
                return selectUser
            } else {
                throw new ApolloError({errorMessage: "비밀번호를 확인해주세요"})
            }
        }
        else if(!selectUser) {
            throw new ApolloError({errorMessage: "가입되지 않은 이메일 입니다."})
        }
    }catch(e) {
            return e
        }
    }
    
    // @FieldResolver()
    // async name(@Root() parent : User){
    //     return `${parent.firstName} ${parent.lastName}`;
    // }

    @Mutation(()=>User)
    async register(
        @Arg('firstName') firstName : string,
        @Arg('lastName') lastName : string,
        @Arg('password') password : string,
        @Arg('email') email : string,
        @Arg('name', {nullable: true}) name : string
    ) : Promise<User> {
        const hashedPassword = await bcrypt.hash(password,12);
        const resultName = name ? name : firstName + lastName
        const user = await User.create({
            firstName,
            lastName,
            email,
            password : hashedPassword,
            name : resultName
        }).save()

        return user;
    }

        

}