# Tag 标签

### 介绍

用于标记关键词和概括主要内容。

### 引入

在 Taro 文件中引入组件

```js
import { Tag } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

通过 `type` 属性控制标签颜色，默认为灰色。

```jsx
function Demo() {
  return (
    <View>
      <Tag type="primary">标签</Tag>
      <Tag type="success">标签</Tag>
      <Tag type="danger">标签</Tag>
      <Tag type="warning">标签</Tag>
    </View>
  )
}
```

### 空心样式

设置 `plain` 属性设置为空心样式。

```jsx
function Demo() {
  return (
    <View>
      <Tag plain={true} type="primary">
        标签
      </Tag>
      <Tag plain={true} type="success">
        标签
      </Tag>
      <Tag plain={true} type="danger">
        标签
      </Tag>
      <Tag plain={true} type="warning">
        标签
      </Tag>
    </View>
  )
}
```

### 圆角样式

通过 `round` 设置为圆角样式。

```jsx
function Demo() {
  return (
    <View>
      <Tag round={true} type="primary">
        标签
      </Tag>
      <Tag round={true} type="success">
        标签
      </Tag>
      <Tag round={true} type="danger">
        标签
      </Tag>
      <Tag round={true} type="warning">
        标签
      </Tag>
    </View>
  )
}
```

### 标记样式

通过 `mark` 设置为标记样式(半圆角)。

```jsx
function Demo() {
  return (
    <View>
      <Tag mark={true} type="primary">
        标签
      </Tag>
      <Tag mark={true} type="success">
        标签
      </Tag>
      <Tag mark={true} type="danger">
        标签
      </Tag>
      <Tag mark={true} type="warning">
        标签
      </Tag>
    </View>
  )
}
```

### 自定义颜色

```jsx
function Demo() {
  return (
    <View>
      <Tag color="#f2826a">标签</Tag>
      <Tag color="#7232dd">标签</Tag>
      <Tag color="#7232dd" plain={true}>
        标签
      </Tag>
      <Tag color="#ffe1e1" textColor="#ad0000">
        标签
      </Tag>
    </View>
  )
}
```

### 标签大小

```jsx
function Demo() {
  return (
    <View>
      <Tag type="danger">标签</Tag>
      <Tag type="danger" size="medium">
        标签
      </Tag>
      <Tag type="danger" size="large">
        标签
      </Tag>
    </View>
  )
}
```

### 可关闭标签

添加 `closeable` 属性表示标签是可关闭的，关闭标签时会触发 `close` 事件，在 `close` 事件中可以执行隐藏标签的逻辑。

```jsx
function Demo() {
  const [show, setShow] = react.useState({
    primary: true,
    success: true,
  })

  return (
    <View>
      {show.primary && (
        <Tag
          className="demo-margin-right"
          type="primary"
          size="medium"
          closeable
          onClose={() => setShow({ ...show, primary: false })}
        >
          标签
        </Tag>
      )}
      {show.success && (
        <Tag
          className="demo-margin-right"
          type="success"
          size="medium"
          closeable
          onClose={() => setShow({ ...show, success: false })}
        >
          标签
        </Tag>
      )}
    </View>
  )
}
```

### TagProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/tag.d.ts)

| 参数      | 说明 | 类型                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 默认值 | 必填    |
| --------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| size      | -    | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"large"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"medium"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"mini"<br/>_                                                                                                                                                                                                                                                                                                                     | -      | `false` |
| mark      | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| color     | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | -      | `false` |
| plain     | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| round     | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| textColor | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | -      | `false` |
| type      | -    | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"default"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"primary"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"success"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"danger"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"warning"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"blue"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"purple"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"purple"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"ash"<br/>_ | -      | `false` |
| weak      | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| closeable | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| children  | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | -      | `false` |
| onClose   | -    | _&nbsp;&nbsp;(e:&nbsp;any)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                 | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                         | 默认值                  |
| ---------------------------- | ----------------------- |
| --tag-padding-xs             | ` 8px;`                 |
| --tag-padding-sm             | ` 12px;`                |
| --tag-padding-md             | ` 16px;`                |
| --tag-padding                | ` 0 @tag-padding-sm;`   |
| --tag-text-color             | ` @white;`              |
| --tag-font-size              | ` @font-size-xs;`       |
| --tag-border-radius          | ` @border-radius-xs;`   |
| --tag-line-height            | ` 32px;`                |
| --tag-mini-font-size         | ` @font-size-xxs;`      |
| --tag-mini-line-height       | ` @line-height-xxs;`    |
| --tag-mini-padding           | ` 0 @tag-padding-xs;`   |
| --tag-large-padding          | ` 4px @tag-padding-md;` |
| --tag-large-border-radius    | ` @border-radius-xs;`   |
| --tag-large-font-size        | ` @font-size-sm;`       |
| --tag-round-border-radius    | ` @border-radius-max;`  |
| --tag-danger-color           | ` @red;`                |
| --tag-primary-color          | ` @gap-main;`           |
| --tag-success-color          | ` @green;`              |
| --tag-warning-color          | ` @orange;`             |
| --tag-default-color          | ` @gray-6;`             |
| --tag-blue-color             | ` @blue;`               |
| --tag-purple-color           | ` @purple-1;`           |
| --tag-ash-color              | ` @fill-4;`             |
| --tag-plain-background-color | ` @white;`              |
