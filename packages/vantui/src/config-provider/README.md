# ConfigProvider 全局配置

### 介绍

用于配置 Vant Weapp 组件的主题样式。

### 引入

在 Taro 文件中引入组件

```js
import { ConfigProvider } from '@antmjs/vantui'
```

## 定制主题

### 介绍

Vant Weapp 组件通过丰富的 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，通过覆盖这些 CSS 变量，可以实现**定制主题、动态切换主题**等效果。

#### 示例

以 Button 组件为例，查看组件的样式，可以看到 `.vanButton--primary` 类名上存在以下变量：

```css
.vanButton--primary {
  color: var(--buttonPrimaryColor, #fff);
  background: var(--buttonPrimaryBackgroundColor, #07c160);
  border: var(--buttonBorderWidth, 1px) solid var(
      --buttonPrimaryBorderColor,
      #07c160
    );
}
```

### 自定义 CSS 变量

#### 通过 CSS 覆盖

你可以直接在代码中覆盖这些 CSS 变量，Button 组件的样式会随之发生改变：

```css
/* 添加这段样式后，Primary Button 会变成红色 */
page {
  --buttonPrimaryBackgroundColor: red;
}
```

### 通过 ConfigProvider 覆盖

`ConfigProvider` 组件提供了覆盖 CSS 变量的能力，你需要在根节点包裹一个 `ConfigProvider` 组件，并通过 `themeVars` 属性来配置一些主题变量。

::: $demo1 :::

### ConfigProviderProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/config-provider.d.ts)

| 参数      | 说明                           | 类型                          | 默认值 | 必填    |
| --------- | ------------------------------ | ----------------------------- | ------ | ------- |
| themeVars | 自定义主题变量, 具体请查看详情 | _&nbsp;&nbsp;IThemeVars<br/>_ | -      | `false` |
| children  | -                              | _&nbsp;&nbsp;ReactNode<br/>_  | -      | `true`  |

### 公共样式变量/_ stylelint-disable selector-type-no-unknown _/

| 名称      | 默认值      |
| --------- | ----------- |
| --brand-5 | ` #f8b733;` |
| --brand-1 | ` #f8d444;` |
| --brand-2 | ` #fbe58f;` |
| --brand-3 | ` #fff5cc;` |
| --brand-4 | ` #fefae7;` |

### 公共样式变量 辅助色

| 名称        | 默认值      |
| ----------- | ----------- |
| --warn-1    | ` #f18f18;` |
| --warn-2    | ` #fbddba;` |
| --warn-3    | ` #fef4e8;` |
| --error-1   | ` #ee4d4d;` |
| --error-2   | ` #facaca;` |
| --error-3   | ` #fdeded;` |
| --success-1 | ` #44b979;` |
| --success-2 | ` #c7ead7;` |
| --success-3 | ` #ecf8f2;` |
| --purple-1  | ` #7055ff;` |
| --purple-2  | ` #bfb2ff;` |
| --purple-3  | ` #f4f1ff;` |

### 公共样式变量 线条色

| 名称     | 默认值      |
| -------- | ----------- |
| --line-1 | ` #404040;` |
| --line-2 | ` #f7f7f7;` |
| --line-3 | ` #eaeaea;` |
| --line-4 | ` #f0f0f0;` |
| --line-5 | ` #ffffff;` |

### 公共样式变量 填充色

| 名称     | 默认值      |
| -------- | ----------- |
| --fill-1 | ` #404040;` |
| --fill-2 | ` #F7F7F7;` |
| --fill-3 | ` #b2b2b2;` |
| --fill-4 | ` #f0f0f0;` |
| --fill-5 | ` #f5f5f5;` |

### 公共样式变量 @fill-5: #FFFFFF;

| 名称 | 默认值 |
| ---- | ------ |

### 公共样式变量文本色

| 名称     | 默认值      |
| -------- | ----------- |
| --text-1 | ` #191919;` |
| --text-2 | ` #7f7f7f;` |
| --text-3 | ` #b2b2b2;` |
| --text-4 | ` #d0d0d0;` |
| --text-5 | ` #fff;`    |

### 公共样式变量 @sky-blue-1: #f8b733;

| 名称 | 默认值 |
| ---- | ------ |

### 公共样式变量 @sky-blue-1: #fff5cc;

| 名称 | 默认值 |
| ---- | ------ |

### 公共样式变量 @sky-blue-1: #fefcf0;

| 名称         | 默认值      |
| ------------ | ----------- |
| --sky-blue-1 | ` #2F6FFF;` |
| --sky-blue-2 | ` #D2E4FF;` |
| --sky-blue-3 | ` #EAF4FF;` |

### 公共样式变量 @brand-1: #2F6FFF;

| 名称 | 默认值 |
| ---- | ------ |

### 公共样式变量 @brand-2: #D2E4FF;

| 名称 | 默认值 |
| ---- | ------ |

### 公共样式变量 @brand-3: #EAF4FF;

| 名称 | 默认值 |
| ---- | ------ |

### 公共样式变量 Color Palette

| 名称            | 默认值          |
| --------------- | --------------- |
| --black         | ` #1a1a1a;`     |
| --white         | ` #fff;`        |
| --gray-1        | ` #f7f8fa;`     |
| --gray-2        | ` #f2f3f5;`     |
| --gray-3        | ` #ebedf0;`     |
| --gray-4        | ` #dcdee0;`     |
| --gray-5        | ` #c8c9cc;`     |
| --gray-6        | ` #969799;`     |
| --gray-7        | ` #646566;`     |
| --gray-8        | ` #323233;`     |
| --red           | ` @error-1;`    |
| --orange        | ` @warn-1;`     |
| --orange-dark   | ` #ed6a0c;`     |
| --orange-light  | ` #fffbe8;`     |
| --green         | ` @success-1;`  |
| --page-back     | ` @white;`      |
| --gap-main      | ` @brand-5;`    |
| --blue          | ` @sky-blue-1;` |
| --primary-color | ` @gap-main;`   |
| --secondary     | ` @fill-5;`     |

### 公共样式变量 @secondary: @brand-5;

| 名称        | 默认值  |
| ----------- | ------- |
| --fillet-xs | ` 8px;` |

### 公共样式变量大小

| 名称            | 默认值                         |
| --------------- | ------------------------------ |
| --gap-xxs       | ` 4px;`                        |
| --gap-xs        | ` @gap-xxs + @gap-xxs; //8`    |
| --gap-s         | ` @gap-xs + @gap-xxs; //16`    |
| --gap-m         | ` @gap-s + @gap-xxs; //20`     |
| --gap-l         | ` @gap-m + @gap-xxs; // 24`    |
| --gap-xl        | ` @gap-l + @gap-xxs; // 28`    |
| --gap-xxl       | ` @gap-xl + @gap-xxs; // 32`   |
| --gap-xxxl      | ` @gap-xxl + @gap-xxs; // 36`  |
| --gap-xxxxl     | ` @gap-xxxl + @gap-xxs; // 40` |
|                 | `root,`                        |
| --primary-color | ` @primary-color;`             |

### 公共样式变量 z-index

| 名称                       | 默认值   |
| -------------------------- | -------- |
| --sticky-z-index           | ` 800;`  |
| --tabbar-z-index           | ` 805;`  |
| --navbar-z-index           | ` 805;`  |
| --goods-action-z-index     | ` 806;`  |
| --submit-bar-z-index       | ` 806;`  |
| --overlay-z-index          | ` 1000;` |
| --dropdown-z-index         | ` 1000;` |
| --popup-z-index            | ` 1010;` |
| --popup-close-icon-z-index | ` 1010;` |
| --notify-z-index           | ` 1500;` |
| --water-mark-z-index       | ` 2000;` |

### 公共样式变量 Gradient Colors

| 名称              | 默认值                                          |
| ----------------- | ----------------------------------------------- |
| --gradient-red    | ` linear-gradient(to right, #ff6034, #ee0a24);` |
| --gradient-orange | ` linear-gradient(to right, #ffd01e, #ff8917);` |

### 公共样式变量 Component Colors

| 名称                     | 默认值      |
| ------------------------ | ----------- |
| --text-color             | ` @text-1;` |
| --active-color           | ` @gray-2;` |
| --active-opacity         | ` 0.85;`    |
| --disabled-opacity       | ` 0.5;`     |
| --background-color       | ` @gray-1;` |
| --background-color-light | ` #fafafa;` |
| --text-link-color        | ` #576b95;` |

### 公共样式变量 准备抛弃

| 名称 | 默认值 |
| ---- | ------ |

### 公共样式变量 Padding

| 名称           | 默认值                |
| -------------- | --------------------- |
| --padding-base | ` 8px;`               |
| --padding-xs   | ` @padding-base * 2;` |
| --padding-sm   | ` @padding-base * 3;` |
| --padding-md   | ` @padding-base * 4;` |
| --padding-lg   | ` @padding-base * 6;` |
| --padding-xl   | ` @padding-base * 8;` |

### 公共样式变量 Font

| 名称                        | 默认值                                                                 |
| --------------------------- | ---------------------------------------------------------------------- |
| --font-size-xxs             | ` 20px;`                                                               |
| --line-height-xxs           | ` 28px;`                                                               |
| --font-size-xs              | ` 22px;`                                                               |
| --line-height-xs            | ` 34px;`                                                               |
| --font-size-sm              | ` 24px;`                                                               |
| --line-height-sm            | ` 36px;`                                                               |
| --font-size-md              | ` 28px;`                                                               |
| --line-height-md            | ` 40px;`                                                               |
| --font-size-lg              | ` 32px;`                                                               |
| --line-height-lg            | ` 44px;`                                                               |
| --font-size-xl              | ` 36px;`                                                               |
| --line-height-xl            | ` 48px;`                                                               |
| --font-size-xxl             | ` 40px;`                                                               |
| --line-height-xxl           | ` 56px;`                                                               |
| --font-weight-bold          | ` 700;`                                                                |
| --base-font-family          | ` 'PingFang SC', -apple-system, BlinkMacSystemFont, 'Helvetica Neue',` |
| --price-integer-font-family | ` PingFang SC, Helvetica Neue, Arial,`                                 |

### 公共样式变量 Animation

| 名称                      | 默认值   |
| ------------------------- | -------- |
| --animation-duration-base | ` 0.3s;` |
| --animation-duration-fast | ` 0.2s;` |

### 公共样式变量 Border

| 名称                | 默认值                                      |
| ------------------- | ------------------------------------------- |
| --border-color      | ` @gray-3;`                                 |
| --border-width-base | ` 2px;`                                     |
| --border-radius-xxs | ` 4px;`                                     |
| --border-radius-xs  | ` @border-radius-xxs + @border-radius-xxs;` |
| --border-radius-s   | ` @border-radius-xs + @border-radius-xxs;`  |
| --border-radius-m   | ` @border-radius-s + @border-radius-xxs;`   |
| --border-radius-l   | ` @border-radius-m + @border-radius-xxs;`   |
| --border-radius-max | ` 999px;`                                   |
