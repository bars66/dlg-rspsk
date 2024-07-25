import Jimp from 'jimp';
const TEMPLATE_FILE_NAME = './template.png';

const VOLLKORN_BIG = './fonts/vollkorn-big/vollkorn.fnt'
const VOLLKORN_TEXT = './fonts/volkorn-text/vollkorn-text.fnt'
const NUMBER_LEFT_X = 555;
const NUMBER_LEFT_Y = 165;

const TEXT_LEFT_X = 60;
const TEXT_LEFT_Y = 270;
const TEXT_WIDTH = 650;

export async function createDlgRaspiska(id: string | number, gr: string, reason: string, date: string) {
  const txt = `Выдано гр. ${gr} о том, что данный гражданин в срок до ${date} должен исполнить:\n\n${reason}`
  const image = await Jimp.read(TEMPLATE_FILE_NAME);
  const fontBig = await Jimp.loadFont(VOLLKORN_BIG);
  const fontText = await Jimp.loadFont(VOLLKORN_TEXT);
  image.print(fontBig, NUMBER_LEFT_X, NUMBER_LEFT_Y, id);
  image.print(fontText, TEXT_LEFT_X, TEXT_LEFT_Y, txt, TEXT_WIDTH);

  return image.getBufferAsync(Jimp.MIME_PNG);
}
