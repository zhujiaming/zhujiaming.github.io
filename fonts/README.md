# 字体文件夹

这个文件夹用于存放项目中使用的字体文件。

## 当前包含的字体

- Roboto-Regular.ttf - Android默认字体
- Roboto-Bold.ttf - Android默认粗体字体

## 使用方法

在CSS中通过@font-face规则引用这些字体：

```css
@font-face {
    font-family: 'Roboto';
    src: url('../fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: url('../fonts/Roboto-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}
```

然后在CSS中使用：

```css
body {
    font-family: 'Roboto', sans-serif;
}
```