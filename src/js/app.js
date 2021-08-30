import GameSavingLoader from './gamesavingloader';

(async () => {
  try {
    return await GameSavingLoader.load();
  } catch (error) {
    throw new Error(error);
  }
})();
