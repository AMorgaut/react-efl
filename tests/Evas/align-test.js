import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import TextBlock from 'src/Evas/TextBlock';

describe('align', () => {
    let node

    beforeEach(() => {
        node = document.createElement('div')
    })

    afterEach(() => {
        unmountComponentAtNode(node)
    })

    it('apply left align style', () => {
        render(<TextBlock align={'left'}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.textAlign).toBe('left')
        })
    })

    it('apply middle align style', () => {
        render(<TextBlock align={'middle'}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.textAlign).toBe('center')
        })
    })

    it('apply middle align style', () => {
        render(<TextBlock align={'center'}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.textAlign).toBe('center')
        })
    })

    it('apply right align style', () => {
        render(<TextBlock align={'right'}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.textAlign).toBe('right')
        })
    })

})
