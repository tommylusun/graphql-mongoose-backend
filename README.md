# graphql-mongoose-backend

GraphQL Backend Server with Mongoose Template

This is a starter template for setting up a simple node server using GraphQL to connect to your mongoDB.

For more details and documentation, visit https://graphql.org/

## Setup/Prerequisites

1. Make sure you have Node/NPM
2. Make sure you have mongoDB instance set up and running, either locally or hosted somewhere
3. Create a `.env` file in root directory and write `MONGO_DB_URI=<your db uri>`. Alternatively, just update `const db` to point to your DB URI directly.
4. Run:

```bash
npm install
```

## Start local server

```bash
npm start
```

## Usage

Open in your browser:

`localhost:4000/graphiql`

This is your graphql playground, where you can try out graphql queries and mutations you've defined. The base template only includes a User data model.

To learn more, visit https://graphql.org/learn/

## Libraries Used

This is the barebones setup to have a GraphQL backend set up with a NoSQL database, with some helpful tools.

- Node
- Express
- MongoDB
- Mongoose
- GraphQL
- Babel - used for ES6 imports

## License

[MIT](https://choosealicense.com/licenses/mit/)
