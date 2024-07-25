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
const fastify_1 = __importDefault(require("fastify"));
const raspiska_1 = require("./raspiska");
const fastify = (0, fastify_1.default)({
    logger: true
});
fastify.get('/generate-raspiska', function handler(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        reply.type('image/png');
        return yield (0, raspiska_1.createDlgRaspiska)(request.query.id || 'no-num', request.query.gr || '', request.query.reason || '', request.query.date || 'no-date');
    });
});
fastify.listen({ host: '0.0.0.0', port: 3000 }).catch(err => console.log('global error', err));
