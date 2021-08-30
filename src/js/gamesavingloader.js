import read from './reader';
import json from './parser';
import GameSaving from './gamesaving';

export default class GameSavingLoader {
  static async load() {
    const result = await json(await read());
    const { id, created, userInfo } = JSON.parse(result);
    return new GameSaving(id, created, userInfo.id, userInfo.name, userInfo.level, userInfo.points);
  }
}
