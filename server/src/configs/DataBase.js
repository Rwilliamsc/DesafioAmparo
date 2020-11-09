export const DATA_BASE = {
  database: 'AMPARODB',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'AMPARODB.sqlite',
    define: {
      underscored: true
    },
    dialectOptions: {
      useUTC: false,
      timezone: 'Etc/GMT-3'
    },
    benchmark: false,
    logging: false
  }
}
