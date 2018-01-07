import React, {Component} from 'react';
import CanvasObject from './CanvasObject';

/**
 * @see https://www.enlightenment.org/develop/api/efl/canvas/rectangle
 */
export class Rectangle extends Component {
    constructor(props) {
        super(props)
        Object.assign(this, CanvasObject);
    }
    render() {
        const {
            size,
            color
        } = this.props;
        const style = {};
        if (size) {
            const { w, h } = size;
            Object.assign(style, {
                width: `${w}px`,
                height: `${h}px`,
            });
        }
        if (color) {
            const {r = 0, g = 0, b = 0, a = 255} = color;
            style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
        }
        return <div style={style}></div>;
    }
}
