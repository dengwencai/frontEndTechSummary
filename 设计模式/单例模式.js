
class DB {
  static getInstance(initVal=0) {
    if (!DB.instance) {
      DB.instance = new DB(initVal);
    }
    return DB.instance;
  }
  constructor(val) {
    this.val = val;
  }

  add(newVal) {
    this.val += newVal;
  }
}

let db = DB.getInstance();
db.add(1);
console.log("%c Line:27 🍖 db", "color:#3f7cff", db);
