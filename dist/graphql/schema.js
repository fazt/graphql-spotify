"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = exports.rootResolvers = exports.rootTypeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const songs_js_1 = require("./songs.js");
exports.rootTypeDefs = (0, apollo_server_express_1.gql) `
  type Query {
    _: String
  }
`;
exports.rootResolvers = {
    Query: {},
};
exports.typeDefs = [exports.rootTypeDefs, songs_js_1.typeDefs];
exports.resolvers = [exports.rootResolvers, songs_js_1.resolvers];
