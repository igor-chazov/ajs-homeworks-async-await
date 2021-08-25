import read from '../reader';

test('Должна создавать объект ArrayBuffer', async () => {
  expect.assertions(1);
  function testReadResolve() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
        return ((input) => {
          const buffer = new ArrayBuffer(input.length * 2);
          const bufferView = new Uint16Array(buffer);
          for (let i = 0; i < input.length; i += 1) {
            bufferView[i] = input.charCodeAt(i);
          }
          resolve(buffer);
        })(data);
      }, 1000);
    });
  }
  await expect(read()).resolves.toEqual(await testReadResolve());
});

test('Если promise завершается с ошибкой', async () => {
  expect.assertions(1);
  function testReadReject() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Ошибка! ...'));
      }, 1000);
    });
  }
  await expect(testReadReject()).rejects.toEqual(new Error('Ошибка! ...'));
});
