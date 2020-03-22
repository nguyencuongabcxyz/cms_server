import mongoose from 'mongoose';

export class DbConnector {
    private _connectionString: string;

    constructor(connectionString: string) {
      this._connectionString = connectionString;
    }

    public connect() {
      mongoose.connect(this._connectionString)
        .then(() => {
          console.log('Connected to Database!!!');
        }).catch((e) => {
          console.log(e);
          console.log('Connection failed!');
        });
    }
}
