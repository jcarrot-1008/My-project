import "reflect-metadata";
import { ApolloServer } from 'apollo-server-express';
import Express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { RegisterResolver } from "./modules/user/Register";


const main = async () => {
    await createConnection();

    const schema = await buildSchema({
        resolvers: [RegisterResolver],
    })

    const apolloServer = new ApolloServer({schema});
    await apolloServer.start()

    const app = Express()

    apolloServer.applyMiddleware({app})

    app.listen(7000, ()=>{
        console.log("server started on http://localhost:7000/graphql");
    })
}

main()