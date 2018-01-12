import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import TextBlock from 'src/Evas/TextBlock';

describe('EVAS valign', () => {
    let node

    beforeEach(() => {
        node = document.createElement('div')
    })

    afterEach(() => {
        unmountComponentAtNode(node)
    })

    it('"top" - Puts text at the top of the line', () => {
        render(<TextBlock valign={'top'}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.verticalAlign).toBe('top')
        })
    })

    it('"center" - Centers the text in the line', () => {
        render(<TextBlock valign={'center'}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.verticalAlign).toBe('middle')
        })
    })

    it('"middle" - Alias for "center"', () => {
        render(<TextBlock valign={'middle'}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.verticalAlign).toBe('middle')
        })
    })

    it('"baseline" - Baseline', () => {
        render(<TextBlock valign={'baseline'}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.verticalAlign).toBe('baseline')
        })
    })

    it('"base" - Alias for "baseline"', () => {
        render(<TextBlock valign={'base'}/>, node, () => {
            const style = node.firstChild.style;
            expect(style.verticalAlign).toBe('baseline')
        })
    })

})
