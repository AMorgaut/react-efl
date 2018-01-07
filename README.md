# react-efl

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Allows to represent Enlightenment Efl components as a DOM structure.

Example
```jsx
<Win>
    <Group>
        <Rectangle size={{w:30,h:30}} color={{r:255,v:0,b:0}}/>
        <Image size={{w:30,h:30}}
               file={'http://example.com/log.png'} />
        <Text color={'#F55'} font_size={42}>react-efl <Color color={'#00F'}>Demo</Color></Text>
    </Group>
</Win>
```

It can be interesting to render an EFL view in the browser and see its representation  from the [React Chrome Developer tools](https://reactjs.org/blog/2014/01/02/react-chrome-developer-tools.html)

# Current Status

Very Basic implementation of the [`Efl.Canvas`](https://www.enlightenment.org/develop/api/efl/canvas) `Group`, `Rectangle`, `Image`, & `Text`

Support most of the [Evas TextBlock Style definitions](https://docs.enlightenment.org/auto/evas_textblock_style_page.html) (more information in the [Evas support dedicated page](./src/Evas/README.md))

# Roadmap

1. Handle positioning
2. Support more `Group`, `Rectangle`, `Image`, & `Text` features
3. Support more [`Efl.Object`](https://www.enlightenment.org/develop/api/efl/object) & [`Efl.Canvas`](https://www.enlightenment.org/develop/api/efl/canvas) level features
4. some Animations features
5. ...

[build-badge]: https://img.shields.io/travis/amorgaut/react-efl/master.png?style=flat-square
[build]: https://travis-ci.org/AMorgaut/react-efl

[npm-badge]: https://img.shields.io/npm/v/react-efl.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-efl

[coveralls-badge]: https://img.shields.io/coveralls/AMorgaut/react-efl/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/AMorgaut/react-efl
