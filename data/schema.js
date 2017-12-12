
import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import pool from './database';

let empty = {}

let bookType = new GraphQLObjectType({
  name: 'bookList',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    title: {
       type: GraphQLString
     },
    author: {
      type: GraphQLString
    }

  })
});

let storeType = new GraphQLObjectType({
    name: 'Store',
    fields: () => ({
      books: {
      type: new GraphQLList(bookType),
      resolve: () => {
        return new Promise((resolve,reject) => {
           pool.query('SELECT * FROM Books',function(error,results,fields){
             error ? reject(error) : resolve(results);
             });
         });
       }
     }
    })
  });



  let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        store: {
          type: storeType,
          resolve: () => empty
          }
        })
      })
    })

   //mutation:

export default schema;
