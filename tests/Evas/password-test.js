import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import TextBlock from 'src/Evas/TextBlock';

describe.skip('EVAS password', () => {
    let node

    beforeEach(() => {
        node = document.createElement('div')
    })

    afterEach(() => {
        unmountComponentAtNode(node)
    })

    it('apply password reset', () => {
        render(<TextBlock password={'reset'}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.marginLeft).toBe('0px')
        })
    })

    it('apply password number value', () => {
        render(<TextBlock password={12}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.marginLeft).toBe('12px')
        })
    })

})
