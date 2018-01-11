import React from 'react'
import { render } from 'react-dom'

import efl from '../../src'
import { Color } from '../../src/Canvas/Text'

const { Win } = efl.Ui;
const { Group, Text, Image, Rectangle } = efl.Canvas;

const pos = { x: 20, y: 20 };
const pos2 = { x: 20, y: 80 };
const size = { w: 42, h: 42 };
const { y } = pos;
const { h } = size;

render(
    <Win>
        <Group name={'text-block'}
               position={pos}
               zoom={{sx: -10, sy: -10, x: 200, y: 21}}
               rotate={{d: -5, x: 200, y: 21}}>
            <Rectangle position={pos}
                       size={{ w: 400, h }}
                       color={{ r: 50, g: 100, b: 200, a: 150 }}/>
            <Image position={pos}
                   size={size}
                   file={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'} />
            <Text position={{ x: 70, y }}
                  color={'#F55'}
                  font_size={h}
                  linesize={h}
                  valign={'middle'}>react-efl <Color color={'#00A'}>demo</Color></Text>
        </Group>

        <Group name={'text-block-2'}
               position={pos2}
               zoom={{sx: 0.5, sy: 2, x: 200, y: 21}}>
            <Rectangle position={pos2}
                       size={{ w: 400, h }}
                       color={{ r: 50, g: 100, b: 200, a: 150 }}/>
            <Image position={pos2}
                   size={size}
                   border={{t:1,r:1,l:1,b:1}}
                   file={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'} />
            <Text position={{ x: 70, y: pos2.y }}
                  color={'#F55'}
                  font_size={h}
                  linesize={h}
                  valign={'middle'}>react-efl <Color color={'#00A'}>demo</Color></Text>
        </Group>
    </Win>,
    document.querySelector('#demo')
);
