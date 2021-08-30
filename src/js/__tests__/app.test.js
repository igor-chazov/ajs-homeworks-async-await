import GameSavingLoader from '../gamesavingloader';

test('Должна создавать объект типа GameSaving', async () => {
  const gameSaving = await GameSavingLoader.load();
  expect(gameSaving).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
});
