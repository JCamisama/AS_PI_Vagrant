export const environment = {
  production: true,
  SERVER : {
    protocol: 'http',
    domain: '127.0.0.1',
    port: 5984,
  },
  USER: 'supervisor',
  PASSWORD: 'strongpassword',
  DATABASE_DESIGN : {
    _id:"_design/pieces",
    views: {
      byName: {
        map: "function (doc) { emit(doc.name, doc.composer);}"
      }
    }
  }
};
