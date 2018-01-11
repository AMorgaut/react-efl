# react-efl

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Allows to represent Enlightenment Efl components as a DOM structure.

Example
```jsx
<Win>
    <Group name={'text-block'}
           position={pos}
           zoom={{sx: -10, sy: -10, x: 200, y: 21}}
           rotate={{d: -5, x: 200, y: 21}}>
        <Rectangle position={pos}
                   size={{ w: 400, h }}
                   color={{ r: 200, g: 200, b: 200 }}/>
        <Image position={pos}
               size={size}
               file={'http://example.com/logo.png'} />
        <Text position={{ x: 70, y }}
              color={'#F55'}
              font_size={h}
              linesize={h}
              valign={'middle'}>
            react-efl <Color color={'#00A'}>demo</Color>
        </Text>
    </Group>
</Win>
```

It can be interesting to render an EFL view in the browser and see its representation  from the [React Chrome Developer tools](https://reactjs.org/blog/2014/01/02/react-chrome-developer-tools.html)

# Current Status

Very Basic implementation of the [`Efl.Canvas`](https://www.enlightenment.org/develop/api/efl/canvas) `Group`, `Rectangle`, `Image`, & `Text`

Support most of the [Evas TextBlock Style definitions](https://docs.enlightenment.org/auto/evas_textblock_style_page.html) (more information in the [Evas support dedicated page](./src/Evas/README.md))

# Roadmap

1. Add Unit tests
2. Handle positioning
3. Support more `Group`, `Rectangle`, `Image`, & `Text` features
4. Support more [`Efl.Object`](https://www.enlightenment.org/develop/api/efl/object) & [`Efl.Canvas`](https://www.enlightenment.org/develop/api/efl/canvas) level features
5. some Animations features
6. Many potential things like `Video`or `Player` support, or anything requested via the [Issues project page](https://github.com/AMorgaut/react-efl/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) ...

[build-badge]: https://img.shields.io/travis/AMorgaut/react-efl/master.png?style=flat-square
[build]: https://travis-ci.org/AMorgaut/react-efl

[npm-badge]: https://img.shields.io/npm/v/react-efl.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-efl

[coveralls-badge]: https://img.shields.io/coveralls/AMorgaut/react-efl/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/AMorgaut/react-efl
