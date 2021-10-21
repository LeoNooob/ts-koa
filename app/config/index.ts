const config = {
    server: {
        port: process.env.SERVER_PORT
    },
    db: {

    },
    log: {
        appenders: { 
          cheese: { type: "file", filename: "logs/cheese.log" },
          access: { type: "file", filename: "logs/access.log" },
        },
        categories: { 
          default: { appenders: ['cheese'], level: 'info' },
          access: { appenders: ['access'], level: 'info'}
        }
      }
}

export default config