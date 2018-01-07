# EFL (enlightenment)

## EVAS Textblock Style

EFL DOM like markup syntax looks to works as

```
some text <key1=val1 key2=val2 keyN=valN>styled text</key1>
```

Where `key1`, `key2`, `keyN` or any other key can be any of the EFL text style property as defined in the [evas_textblock_style](https://docs.enlightenment.org/auto/evas_textblock_style_page.html) documentation

Ex: 

```
some text <font_size="12" font_weight="bold" color="#5F6B">styled text</font_size>
```

It is not a valid DOM syntax as here, the tag name receives a value


## Web Inspector Tool Representation

To get the best DOM representation in the debugger, we will generate a very similar syntax which will look like:

```xml
some text <key1 key1="val1" key2="val2" keyN="valN">styled text</key1>
```

We then duplicates the tag name as an inner attribute that receives the value expected by the first style property.

Ex: 

```xml
some text <font_size font_size="12" font_weight="bold" color="#5F6B">styled text</font_size>
```


### React Components

When generated as React components, such syntax can be nicely seen in the debugger using the [react-developer-tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

![img](https://lh3.googleusercontent.com/GjX6Q3_FVJfc0DqE2wiPKkgOfth6otzV-D7GV-wB6sH5_t1oodMaHOBLsYOLeydb85bKWu6X=w640-h400-e365)

#### Small limitations

* To be considered as React Components, the tag names must start by an uppercase. But this rule helps to prevent from conflicts (see custom elements) 
* The plugin `eslint-plugin-react` raise warnings such as `Font_size must be in PascalCase` related to the `react/jsx-pascal-case`rule
