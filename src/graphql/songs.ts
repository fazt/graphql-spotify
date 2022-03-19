import { gql } from "apollo-server-core";
import Song from "../models/song.model.js";

export const typeDefs = gql`
  type Song {
    _id: ID
    name: String
    author: String
    genre: String
  }

  type Query {
    getSongs: [Song]
  }

  input InputSong {
    name: String
    genre: String
    author: String
  }

  type Mutation {
    uploadSong(input: InputSong): Song
  }
`;

export const resolvers = {
  Query: {
    getSongs: async () => {
      return await Song.find();
    },
  },
  Mutation: {
    async uploadSong(_: any, args: any) {
      const { name, genre, author } = args.input;
      console.log(args);
      const newSong = new Song({
        name,
        genre,
        author,
      });
      const songSaved = await newSong.save();
      return songSaved;
    },
  },
};
