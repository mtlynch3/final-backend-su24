import { db } from './database/index.js';
import { seedDb } from './database/models/index.js';

const syncDatabase = async () => {
    try {
      //the {force: true} option will clear the database tables
      //every time we restart the server
      //remove the option if you want the data to persist, ie: 
      //await db.sync();
  
      await db.sync({force: true});
      console.log('------Synced to db------')
      await seedDb();
      console.log('------Successfully seeded db------');
    } catch (err) {
      console.error('syncDb error:', err);
    }  
}

const bootApp = async () => {
    await syncDatabase();
}

bootApp();