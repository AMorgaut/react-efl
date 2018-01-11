import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Image from 'src/Canvas/Image'

describe('Image', () => {
    let node

    beforeEach(() => {
        node = document.createElement('div')
    })

    afterEach(() => {
        unmountComponentAtNode(node)
    })

    it('generates a div HTML tag', () => {
        render(<Image />, node, () => {
            expect(node.firstChild.tagName).toBe('IMG')
        })
    })

    it('converts name property to id attribute', () => {
        render(<Image name={'foo'} />, node, () => {
            expect(node.firstChild.id).toBe('foo')
        })
    })

    it('has a valid absolute position', () => {
        render(<Image position={{x:42, y:51}} />, node, () => {
            const style = node.firstChild.style;
            expect(style.left).toBe('42px')
            expect(style.top).toBe('51px')
        })
    })

    it('has a valid size', () => {
        render(<Image size={{w:42, h:51}} />, node, () => {
            const style = node.firstChild.style;
            expect(style.width).toBe('42px')
            expect(style.height).toBe('51px')
        })
    })

    it('has a valid border', () => {
        render(<Image border={{ t: 5, l: 1, r: 2, b: 20 }} />, node, () => {
            const style = node.firstChild.style;
            expect(style.borderStyle).toBe('solid')
            expect(style.borderTopWidth).toBe('5px')
            expect(style.borderLeftWidth).toBe('1px')
            expect(style.borderRightWidth).toBe('2px')
            expect(style.borderBottomWidth).toBe('20px')
        })
    })

    it('has a valid file path', () => {
        render(<Image file={'http://example.com/logo.png'} />, node, () => {
            expect(node.firstChild.src).toBe('http://example.com/logo.png')
        })
    })

})
