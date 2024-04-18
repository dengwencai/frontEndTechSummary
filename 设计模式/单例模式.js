
class DB {
  static getInstance() {
    if (!DB.instance) {
      DB.instance = new DB(0);
    }
    return DB.instance;
  }
  constructor(val) {
    this.val = val;
  }

  add(newVal) {
    this.val = newVal;
  }
}

let db = DB.getInstance();
db.add(1);
console.log("%c Line:27 🍖 db", "color:#3f7cff", db);
