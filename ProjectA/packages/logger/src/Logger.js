const Logger =  {
  debug: () => {
    return 'debug logger';
  },
  info: () => {
    return 'info logger';
  },
  error: (...args) => {
    return 'error logger';
  }
};

module.exports = Logger;
Object.freeze(Logger);
