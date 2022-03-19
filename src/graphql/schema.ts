import { gql } from "apollo-server-express";
import { typeDefs as Song, resolvers as SongResolvers } from "./songs";

export const rootTypeDefs = gql`
  type Query {
    _: String
  }
`;

export const rootResolvers = {
  Query: {},
};

export const typeDefs = [rootTypeDefs, Song];
export const resolvers = [rootResolvers, SongResolvers];
