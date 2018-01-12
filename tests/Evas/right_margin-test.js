import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import TextBlock from 'src/Evas/TextBlock';

describe('right_margin', () => {
    let node

    beforeEach(() => {
        node = document.createElement('div')
    })

    afterEach(() => {
        unmountComponentAtNode(node)
    })

    it('apply right_margin reset', () => {
        render(<TextBlock right_margin={'reset'}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.marginRight).toBe('0px')
        })
    })

    it('apply right_margin number value', () => {
        render(<TextBlock right_margin={12}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.marginRight).toBe('12px')
        })
    })

})
