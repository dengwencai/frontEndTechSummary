// 1. store，存放所有的state
// 2. action，普通的js对象，用来描述这次更新type和content
// 3. reducer，纯函数，接受action，修改state
// 4. 使用dispatch触发函数，组件使用高阶组件connect链接store
// 5. 处理异步操作使用中间件redux-thunk
