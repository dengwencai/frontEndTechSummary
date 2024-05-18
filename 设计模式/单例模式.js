class DB {
  static getInstance(initVal) {
    if (!DB.instance) {
      DB.instance = new DB(initVal);
    }
    return DB.instance;
  }

  constructor(val) {
    this.val = val;
  }

  sum(num) {
    this.val += num;
    return this;
  }

  minus(num) {
    this.val -= num;
    return this;
  }

  multify(num) {
    this.val *= num;
    return this;
  }

  divide(num) {
    this.val /= num;
    return this;
  }
}

let db = DB.getInstance();
db.add(1);
console.log("%c Line:27 🍖 db", "color:#3f7cff", db);
