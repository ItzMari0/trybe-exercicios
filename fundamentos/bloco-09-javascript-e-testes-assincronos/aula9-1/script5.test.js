const uppercase = require('./script5.js')

it('Verifica se o parâmetro retorna em letrasmaiúsculas', (done) => {
  uppercase('test', (str) => {
    try {
      expect(str).toBe('TEST');
      done();
    } catch (error) {
      done (error);
    }
  });
});