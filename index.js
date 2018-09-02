const speedtest = require('./src/speedtest');

exports.processSpeedtestEvent = async (pubSubMessage) => {
  if (pubSubMessage.data) {
    const speedtestEvent = pubSubMessage.data ? Buffer.from(pubSubMessage.data, 'base64') : null;
    await speedtest.createTableIfNotExists();
    await speedtest.writeEventToBQ(speedtestEvent);
  }
};