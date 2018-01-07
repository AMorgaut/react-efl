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

### Custom Elements

The same result can be provided more **natively** in the [Chrome DevTools Elements panel](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/) when using [HTML5 Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements)

#### Potential conflicts for custom elements

Two textblock property names match with already existing HTML tag names:

* `<font>` (deprecated)
* `<style>` (used for inline CSS)

They still can be overriden using `getElementsByTagName()`, reading their custom attributes and applying the custom style in JS.
This custom style should not be set via an attribute to not pollute the tag representation in the DOM.
The `<style>` tag may need an additional `type="textblock"` attribute to prevent its content to be interpreted as CSS.

### Edit Feature

TBD

To get even more advantages from the devtool interface, we could use a [Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)

Those observer can be disconnected during refresh, and reconnected after refresh.

They would let this EFL tool detect when the DOM is modified via the DevTool, and it could then send an update command via the the [remote debugging protocol](https://chromedevtools.github.io/debugger-protocol-viewer/1-2/) that is activated only when the UI is launched in "inspect" mode.
It could use its [`evaluate` command](https://chromedevtools.github.io/devtools-protocol/1-2/Runtime/#method-evaluate) to manipulate the UI state, potentialy via the **testtools** `NodeTracker` API. 