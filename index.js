import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { makeExecutableSchema } from "graphql-tools";
import dotenv from 'dotenv';

import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolver";

dotenv.config();
const app = express();
const PORT = process.env.PORT || "4000";
const db = process.env.MONGO_DB_URI;

// Connect to MongoDB with Mongoose.
mongoose
    .connect(
        db, {
            useNewUrlParser: true
        }
    )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// GraphQL Schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressGraphQL({
        schema,
        graphiql: true
    })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));