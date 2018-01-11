import React, { Component } from 'react';
import {getOpacity} from "../Evas/util/color";

// import { getOpacity, hexaToRgba, parseRichText } from '../../../lib/efl';

/**
 * @see https://www.enlightenment.org/develop/api/efl/canvas/group
 */
export default class Group extends Component {

    render() {

        const {
            name, position = {},
            mapPointCoords = [], mapEnable = false,
            zoom, rotate,
            color = {}, visible = true, opacity,
            children
        } = this.props;

        const { x = 0,  y = 0 } = position;
        const { a: alpha } = color;
        const style = {
            position: 'absolute',
            left: x,
            top: y,
            visibility: visible ? 'shown' : 'hidden',
            opacity: getOpacity(opacity || alpha || 255),
        };

        if (zoom) {
            const { sx, sy, x, y } = zoom;
            style.transform = `scale(${sx}, ${sy})`;
            style.transformOrigin = `${x}px ${y}px`;
        }

        if (rotate) {
            const { d, x, y } = rotate;
            style.transform = `rotate(${d}deg)`;
            style.transformOrigin = `${x}px ${y}px`;
        }

        return <div id={name} className={'Group'} style={style}>{children}</div>;
    }
}
