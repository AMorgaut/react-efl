import React, { Component } from 'react'
import { getFontStyle } from '../Evas/TextBlock';

export default class Text extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {children} = this.props;
        const style = getFontStyle(this.props);
        return <span className="Text" style={style}>{children}</span>;
    }
}

export {
    Align,
    Bakin_color,
    Color,
    Ellipsis,
    Font, Font_size, Font_style, Font_weight, Font_width,
    Glow_color,
    Left_margin, Linesize,
    Outline_color,
    password,
    Right_margin,
    Shadow_color, Strikethrough, Strikethrough_color, Style,
    Tabstops, Underline, Underline_color, Underline_dash_color,
    Valign,
    Wrap
} from '../Evas/TextBlock';