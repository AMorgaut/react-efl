import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Group from 'src/Canvas/Group'

describe('Group', () => {
    let node

    beforeEach(() => {
        node = document.createElement('div')
    })

    afterEach(() => {
        unmountComponentAtNode(node)
    })

    it('generates a div HTML tag', () => {
        render(<Group />, node, () => {
            expect(node.firstChild.tagName).toBe('DIV')
        })
    })

    it('converts name property to id attribute', () => {
        render(<Group name={'foo'}/>, node, () => {
            expect(node.firstChild.id).toBe('foo')
        })
    })

    it('has a valid absolute position', () => {
        render(<Group position={{x:42, y:51}} />, node, () => {
            const style = node.firstChild.style;
            expect(style.left).toBe('42px')
            expect(style.top).toBe('51px')
        })
    })

    it('has a valid content', () => {
        render(<Group>foo</Group>, node, () => {
            expect(node.textContent).toBe('foo')
        })
    })

})
