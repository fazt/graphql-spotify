"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const apollo_server_core_1 = require("apollo-server-core");
const song_model_js_1 = __importDefault(require("../models/song.model.js"));
exports.typeDefs = (0, apollo_server_core_1.gql) `
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
exports.resolvers = {
    Query: {
        getSongs: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield song_model_js_1.default.find();
        }),
    },
    Mutation: {
        uploadSong(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { name, genre, author } = args.input;
                console.log(args);
                const newSong = new song_model_js_1.default({
                    name,
                    genre,
                    author,
                });
                const songSaved = yield newSong.save();
                return songSaved;
            });
        },
    },
};
