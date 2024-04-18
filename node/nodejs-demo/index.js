const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");
const bodyParser = require('koa-bodyparser');
const path = require("path");
const { find, add, del, update } = require("./api");

const app = new Koa();
const route = new Router();

app.use(bodyParser())

app.use(async (ctx, next) => {
  await next();
});

route.get("/", (ctx, next) => {
  ctx.body = "nihao";
  next();
});

route.get("/add", async (ctx, next) => {
  let obj = {
    uid: ctx.query.id,
    name: ctx.query.name,
    age: ctx.query.age,
    sex: ctx.query.sex,
    weight: ctx.query.weight,
  };
  let res = await add("user", [obj]);
  ctx.body = res;
});

route.post("/list", async (ctx, next) => {
  console.log("%c Line:35 🍷 ctx", "color:#f5ce50", ctx);

  let list = await find("user", ctx.request.body);
  ctx.body = list;
});

route.put("/update", async (ctx, next) => {
  let obj = {
    name: ctx.request.body.name,
    age: ctx.request.body.age,
    sex: ctx.request.body.sex,
    weight: ctx.request.body.weight,
  };
  let list = await update("user", [{ uid: ctx.request.body.id }, { $set: obj }]);
  ctx.body = list;
});

route.delete("/del", async (ctx, next) => {
  let params = { uid: ctx.request.body.uid };
  let list = await del("user", params);
  ctx.body = list;
});

route.post("/say", (ctx) => {
  const { name } = ctx.request.body;
  ctx.body = {
    time: new Date(),
    reply: `Hello ${name}!`,
  };
});

app.use(route.routes()); //启动路由

// 主要用于 405 Method Not Allowed 这个状态码相关：
// 如果不加这个中间件，如果接口是get请求，而前端使用post请求，会返回 404 状态码，
//  接口未定义。如果加了这个中间件，这种情况时，会返回405 Method Not Allowed
// ，提示 request method 不匹配，并在响应头返回接口支持的请求方法，更有利于调试
app.use(route.allowedMethods());

app.use(static(path.join(__dirname, "./static")));

app.listen("3000", () => {
  console.log("http:localhost:3000");
});
