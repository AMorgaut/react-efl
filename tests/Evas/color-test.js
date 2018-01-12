import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import TextBlock from 'src/Evas/TextBlock';

describe('color', () => {
    let node

    beforeEach(() => {
        node = document.createElement('div')
    })

    afterEach(() => {
        unmountComponentAtNode(node)
    })

    it('apply color in short format', () => {
        render(<TextBlock color={'#05F'}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.color).toBe('rgb(0, 85, 255)')
        })
    })

    it('apply color in long format', () => {
        render(<TextBlock color={'#09F126'}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.color).toBe('rgb(9, 241, 38)')
        })
    })

})
