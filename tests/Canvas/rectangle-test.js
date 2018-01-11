import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Rectangle from 'src/Canvas/Rectangle'

describe('Rectangle', () => {
    let node

    beforeEach(() => {
        node = document.createElement('div')
    })

    afterEach(() => {
        unmountComponentAtNode(node)
    })

    it('generates a div HTML tag', () => {
        render(<Rectangle/>, node, () => {
            expect(node.firstChild.tagName).toBe('DIV')
        })
    })

    it('converts name property to id attribute', () => {
        render(<Rectangle name={'foo'}/>, node, () => {
            expect(node.firstChild.id).toBe('foo')
        })
    })

    it('converts name property to id attribute', () => {
        render(<Rectangle name={'foo'} />, node, () => {
            expect(node.firstChild.id).toBe('foo')
        })
    })

    it('has a valid absolute position', () => {
        render(<Rectangle position={{x:42, y:51}} />, node, () => {
            const style = node.firstChild.style;
            expect(style.left).toBe('42px')
            expect(style.top).toBe('51px')
        })
    })

    it('has a valid size', () => {
        render(<Rectangle size={{w:42, h:51}} />, node, () => {
            const style = node.firstChild.style;
            expect(style.width).toBe('42px')
            expect(style.height).toBe('51px')
        })
    })

    it('has a valid background color', () => {
        render(<Rectangle color={{ r: 50, g: 100, b: 200 }} />, node, () => {
            const style = node.firstChild.style;
            expect(style.backgroundColor).toBe('rgb(50, 100, 200)')
        })
    })

})
