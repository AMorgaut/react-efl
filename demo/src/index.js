import React from 'react'
import {render} from 'react-dom'

import Win from '../../src/Ui/Win'

import Group from "../../src/Canvas/Group";
import Text from '../../src/Canvas/Text'
import Image from "../../src/Canvas/Image";

import TextBlock from '../../src/Evas/TextBlock'
import {Rectangle} from "../../src/Canvas/Rectangle";
const { Color } = TextBlock;

render(
    <Win>
        <Group>
            <Rectangle size={{w:30,h:30}} color={{r:255}}/>
            <Image size={{w:30,h:30}}
                   file={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'} />
            <Text color={'#F55'} font_size={42}>react-efl <Color color={'#00F'}>Demo</Color></Text>
        </Group>
    </Win>,
    document.querySelector('#demo')
);
