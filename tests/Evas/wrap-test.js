import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import TextBlock from 'src/Evas/TextBlock';

describe('wrap', () => {
    let node

    beforeEach(() => {
        node = document.createElement('div')
    })

    afterEach(() => {
        unmountComponentAtNode(node)
    })

    // TODO look if we can test real text representation instead of css values
    describe('apply wrap value', function () {

        it('"word" - Only wraps lines at word boundaries', () => {
            render(<TextBlock wrap={'word'}/>, node, () => {
                const style = node.firstChild.style;
                expect(style.overflowWrap).toBe('normal')
                expect(style.wordBreak).toBe('normal')
            })
        })

        it('"char" - Wraps at any character', () => {
            render(<TextBlock wrap={'char'}/>, node, () => {
                const style = node.firstChild.style;
                expect(style.overflowWrap).toBe('break-word')
                expect(style.wordBreak).toBe('break-all')
            })
        })

        it('"mixed" - Wrap at words if possible, if not at any character', () => {
            render(<TextBlock wrap={'mixed'}/>, node, () => {
                const style = node.firstChild.style;
                expect(style.overflowWrap).toBe('break-word')
                expect(style.wordBreak).toBe('normal')
            })
        })

        it('"hyphenation" - Hyphenate if possible, if not wrap at words if possible, if not at any character', () => {
            render(<TextBlock wrap={'hyphenation'}/>, node, () => {
                const style = node.firstChild.style;
                expect(style.overflowWrap).toBe('break-word')
                expect(style.wordBreak).toBe('normal')
                expect(style.hyphens).toBe('manual')
            })
        })

        it.skip('"" - Don\'t wrap', () => {
            render(<TextBlock wrap={''}/>, node, () => {
                const style = node.firstChild.style;
                expect(style.overflowWrap).toBe('normal')
                expect(style.wordBreak).toBe('keep-all')
            })
        })

    })
})
