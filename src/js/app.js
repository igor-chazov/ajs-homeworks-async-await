import GameSavingLoader from './gamesavingloader';

// GameSavingLoader.load().then((saving) => JSON.parse(saving), (error) => {
//   throw error;
// });

(async () => {
  try {
    const gameSaving = await GameSavingLoader.load();
    return JSON.parse(gameSaving);
  } catch (error) {
    throw new Error(error);
  }
})();
