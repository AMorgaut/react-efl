import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import TextBlock from 'src/Evas/TextBlock';

describe('tabstops', () => {
    let node

    beforeEach(() => {
        node = document.createElement('div')
    })

    afterEach(() => {
        unmountComponentAtNode(node)
    })

    it('apply tabstops value', () => {
        render(<TextBlock tabstops={8}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.tabSize).toBe('8')
        })
    })

})
 