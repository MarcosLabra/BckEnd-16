class Productos {
    constructor(knex) {
        this.knex = knex;
    }

    async save(product) {
        this.knex('productos').insert(product)
            .then(art => art)
            .catch(err => { console.log(err); throw err });

    }

    async getAll() {
        this.knex('productos').select('*')
            .then(rows => rows)
            .catch(err => { console.log(err); throw err });
    }
}

module.exports = Productos;
