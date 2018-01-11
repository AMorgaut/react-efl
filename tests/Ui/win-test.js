import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Win from 'src/Ui/Win'

describe('Win', () => {
    let node

    beforeEach(() => {
        node = document.createElement('div')
    })

    afterEach(() => {
        unmountComponentAtNode(node)
    })

    it('generates a div HTML tag', () => {
        render(<Win />, node, () => {
            expect(node.firstChild.tagName).toBe('DIV')
        })
    })

    it('has a valid content', () => {
        render(<Win>foo</Win>, node, () => {
            expect(node.textContent).toBe('foo')
        })
    })

})
