import React, { Component } from 'react';
import { CanvasObject } from './CanvasObject';
// import { getOpacity, hexaToRgba, parseRichText } from '../../../lib/efl';

/**
 * @see https://www.enlightenment.org/develop/api/efl/canvas/image
 */
export default class Group extends Component {

    constructor() {
        super();
    }

    render() {
        const style = {};
        return <div className={'Group'} style={style}>{this.props.children}</div>;
    }
}
