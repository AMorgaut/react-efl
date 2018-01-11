import React, {Component} from 'react';
import { getOpacity } from '../Evas/util/color';

/**
 * @see https://www.enlightenment.org/develop/api/efl/canvas/image
 */
export default class Image extends Component {

    render() {

        const { name, file, position = {}, size = {}, border, fill, color = {}, visible = true, opacity } = this.props;
        const { x = 0,  y = 0 } = position;
        const { w,  h } = size;
        const { a: alpha } = color;
        const style = {
            position: 'absolute',
            left: x,
            top: y,
            width: w,
            height: h,
            visibility: visible ? 'shown' : 'hidden',
            opacity: getOpacity(opacity || alpha || 255),
        };

        if (border) {
            const { t, r, l, b } = border;
            // top, right, left, bottom
            style.borderWidth = `${t}px ${r}px ${b}px ${l}px`;
            style.borderStyle = 'solid';
        }

        let blockStyle;
        if (fill) {
            blockStyle = Object.assign({}, style);
            Object.assign(style, {
                position: 'relative',
                left: fill.x,
                top: fill.y,
                width: fill.w,
                height: fill.h,
                borderWidth: '',
                borderStyle: '',
                opacity: '',
            });
        }

        const alt = '';
        const image = <img id={name} src={file} style={style} alt={alt} />;

        return fill ? <div {...blockStyle}>{image}</div> : image;
    }
}
