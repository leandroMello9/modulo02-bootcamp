import Sequelize from 'sequelize';
import User from '../app/models/User';
import databaseconfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  // Conexão com o banco de dados e os models
  init() {
    this.connection = new Sequelize(databaseconfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
