import React, {Component} from 'react';

/**
 * @see https://www.enlightenment.org/develop/api/efl/canvas/rectangle
 */
export default class Rectangle extends Component {

    render() {

        const { name, position = {}, size = {}, color, visible = true } = this.props;
        const { x = 0,  y = 0 } = position;
        const { w,  h } = size;
        const style = {
            position: 'absolute',
            left: x,
            top: y,
            width: w,
            height: h,
            visibility: visible ? 'shown' : 'hidden',
        };

        if (color) {
            const {r = 0, g = 0, b = 0, a = 255} = color;
            style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
        } else {
            // All newly created Evas rectangles get the default color values of 255 255 255 255 (opaque white).
            style.backgroundColor = `rgba(255, 255, 255, 1)`;
        }

        return <div id={name} style={style} />;
    }

}
