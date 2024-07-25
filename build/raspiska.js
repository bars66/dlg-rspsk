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
exports.createDlgRaspiska = createDlgRaspiska;
const jimp_1 = __importDefault(require("jimp"));
const TEMPLATE_FILE_NAME = './template.png';
const VOLLKORN_BIG = './fonts/vollkorn-big/vollkorn.fnt';
const VOLLKORN_TEXT = './fonts/volkorn-text/vollkorn-text.fnt';
const NUMBER_LEFT_X = 555;
const NUMBER_LEFT_Y = 165;
const TEXT_LEFT_X = 60;
const TEXT_LEFT_Y = 270;
const TEXT_WIDTH = 650;
function createDlgRaspiska(id, gr, reason, date) {
    return __awaiter(this, void 0, void 0, function* () {
        const txt = `Выдано гр. ${gr} о том, что данный гражданин в срок до ${date} должен исполнить:\n\n${reason}`;
        const image = yield jimp_1.default.read(TEMPLATE_FILE_NAME);
        const fontBig = yield jimp_1.default.loadFont(VOLLKORN_BIG);
        const fontText = yield jimp_1.default.loadFont(VOLLKORN_TEXT);
        image.print(fontBig, NUMBER_LEFT_X, NUMBER_LEFT_Y, id);
        image.print(fontText, TEXT_LEFT_X, TEXT_LEFT_Y, txt, TEXT_WIDTH);
        return image.getBufferAsync(jimp_1.default.MIME_PNG);
    });
}
