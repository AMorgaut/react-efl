import React, {Component} from 'react';
import CanvasObject from './CanvasObject';
import { getOpacity } from '../Evas/util/color';

/**
 * @see https://www.enlightenment.org/develop/api/efl/canvas/image
 */
export default class Image extends Component {

    constructor(props) {
        super(props);
        Object.assign(this, CanvasObject);
    }

    /**
     * Set the source file from where an image object must fetch the real image data
     *
     * @see https://www.enlightenment.org/develop/api/efl/file/property/file
     * @param {string} file The image file path
     */
    setFile(file) {
        Object.assign(this.props, { file });
    }

    /**
     * Specifies how to tile an image to fill its rectangle geometry.
     * 
     * @see https://www.enlightenment.org/develop/api/efl/canvas/image/internal/property/fill
     * @param {number} x1
     * @param {number} x2
     * @param {number} y1
     * @param {number} y2
     */
    setFill(x1, x2, y1, y2) {
        Object.assign(this.props.fill, { x1, x2, y1, y2 });
    }

    /**
     * Binds the object's Efl.Gfx.Fill.fill property to its actual geometry.
     * @see https://www.enlightenment.org/develop/api/efl/canvas/image/internal/property/fill_auto
     * @param {boolean} auto
     */
    setFillAuto(auto) {
        if (auto) {
            const { position, size } = this.props;
            const { x, y } = position;
            const { w, h } = size;
            this.setFill(x, x + w, y, y + h);
        }
    }

    render() {

        const {
            file = null,
            size = {},
            position = {},
            color = {},
            opacity,
        } = this.props;

        const { w = 0, h =0 } = size;
        const { x = 0, y = 0 } = position;
        const { a: alpha } = color;

        const style = {
            width: `${w}px`,
            height: `${h}px`,
            left: `${x}px`,
            top: `${y}px`,
            opacity: getOpacity(opacity || alpha || 255),
        };

        return <img src={file} style={style} />;
    }
}
