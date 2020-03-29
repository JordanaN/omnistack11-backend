const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({
    'evento': 'testando',
    'aluno': 'jordana'
  });
});

app.listen(3333);
