import { merge } from 'lodash';

import User from "./resolvers/User";

const resolvers = merge(User)

export default resolvers;