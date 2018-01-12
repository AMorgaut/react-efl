import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import TextBlock from 'src/Evas/TextBlock';

describe('left_margin', () => {
    let node

    beforeEach(() => {
        node = document.createElement('div')
    })

    afterEach(() => {
        unmountComponentAtNode(node)
    })

    it('apply left_margin reset', () => {
        render(<TextBlock left_margin={'reset'}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.marginLeft).toBe('0px')
        })
    })

    it('apply left_margin number value', () => {
        render(<TextBlock left_margin={12}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.marginLeft).toBe('12px')
        })
    })

})
