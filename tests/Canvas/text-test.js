import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Text, {Color} from 'src/Canvas/Text';

describe('Text', () => {
    let node

    beforeEach(() => {
        node = document.createElement('div')
    })

    afterEach(() => {
        unmountComponentAtNode(node)
    })

    it('generates a span HTML tag', () => {
        render(<Text />, node, () => {
            expect(node.firstChild.tagName).toBe('DIV')
        })
    })

    it('converts name property to id attribute', () => {
        render(<Text name={'foo'}/>, node, () => {
            expect(node.firstChild.id).toBe('foo')
        })
    })

    it('has a valid absolute position', () => {
        render(<Text position={{x:42, y:51}} />, node, () => {
            const style = node.firstChild.style;
            expect(style.left).toBe('42px')
            expect(style.top).toBe('51px')
        })
    })

    it('has a valid size', () => {
        render(<Text size={{w:42, h:51}} />, node, () => {
            const style = node.firstChild.style;
            expect(style.width).toBe('42px')
            expect(style.height).toBe('51px')
        })
    })

    it('has a valid color', () => {
        render(<Text color={{ r: 50, g: 100, b: 200 }} />, node, () => {
            const style = node.firstChild.style;
            expect(style.color).toBe('rgb(50, 100, 200)')
        })
    })

    it('has a valid content', () => {
        render(<Text>foo</Text>, node, () => {
            expect(node.textContent).toBe('foo')
        })
    })

    it('has a valid inner color', () => {
        render(<Text>foo <Color color={{ r: 50, g: 100, b: 200 }}>bar</Color></Text>, node, () => {
            expect(node.firstChild.textContent).toBe('foo bar')
            const innerTextblock = node.firstChild.firstElementChild;
            expect(innerTextblock.tagName).toBe('SPAN')
            expect(innerTextblock.textContent).toBe('bar')
            const { style } = innerTextblock;
            expect(style.color).toBe('rgb(50, 100, 200)')
        })
    })

})
