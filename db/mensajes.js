class Mensajes {
  constructor(knex) {
    this.knex = knex;
  }

  async save(product) {
    this.knex('mensajes').insert(product)
      .then(art => art)
      .catch(err => { console.log(err); throw err });

  }

  async getAll() {
    this.knex('mensajes').select('*')
      .then(rows => rows)
      .catch(err => { console.log(err); throw err });
  }
}

module.exports = Mensajes;