import Loki from 'lokijs';

const db = new Loki('lokidb.json');

export const initLokiDB = async () => {
  db.addCollection('events');

  db.saveDatabase();
}