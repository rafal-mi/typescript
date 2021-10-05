const logger = {
  log: (...args) => console.log(new Date(), ...args)
}

logger.log('A message');

