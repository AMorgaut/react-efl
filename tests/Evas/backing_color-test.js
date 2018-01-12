import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import TextBlock from 'src/Evas/TextBlock';

describe('backing_color', () => {
    let node

    beforeEach(() => {
        node = document.createElement('div')
    })

    afterEach(() => {
        unmountComponentAtNode(node)
    })

    it('apply background color in short format', () => {
        render(<TextBlock backing_color={'#05F'}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.backgroundColor).toBe('rgb(0, 85, 255)')
        })
    })

    it('apply background color in long format', () => {
        render(<TextBlock backing_color={'#09F126'}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.backgroundColor).toBe('rgb(9, 241, 38)')
        })
    })

})
