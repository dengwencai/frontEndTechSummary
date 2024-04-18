# useMount

只在组件 mount 时执行的 hook。

## 使用方法

```typescript
import React from 'react';
import { useMounted } from 'src/hooks';

const Demo = () => {
  useMounted(() => {
    console.log('当前组件处于Mount阶段');
  });
  return <>useMounted演示# </>;
};

export default Demo;
```

## API

```typescript
useMounted(fn: () => void );
```

### 参数

| 参数 | 说明                 | 类型         | 默认值 |
| ---- | -------------------- | ------------ | ------ |
| fn   | mounted 时执行的函数 | `() => void` | -      |
