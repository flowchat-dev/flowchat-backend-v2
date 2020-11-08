import _readline from 'readline';

const rl = _readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readline = (question: string): Promise<string> => new Promise((res) => rl
  .question(question, res));

export default readline;
