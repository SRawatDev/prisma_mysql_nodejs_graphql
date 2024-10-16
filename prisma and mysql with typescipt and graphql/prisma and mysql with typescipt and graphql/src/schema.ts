import { makeExecutableSchema } from '@graphql-tools/schema';
import path from 'path';
import fs from 'fs';
const schemaPath = path.join(__dirname, 'schema.graphql');
const typeDefs = fs.readFileSync(schemaPath, { encoding: 'utf-8' });
const schema = makeExecutableSchema({ typeDefs });
export default schema;
