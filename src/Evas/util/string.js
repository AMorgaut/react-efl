import React from 'react';

import TextBlock, {
    Align,
    Backing_color,
    Color,
    Ellipsis,
    Font, Font_size, Font_style, Font_weight, Font_width,
    Glow_color,
    Left_margin, Linesize,
    Outline_color,
    Password,
    Right_margin,
    Shadow_color, Strikethrough, Strikethrough_color, Style,
    Tabstops, Underline, Underline_color, Underline_dash_color,
    Valign,
    Wrap
} from '../TextBlock';



function unsupported(type) {
    return (style, key, content) => {
        console.warn('Unsupported textblock style type:', type, style[type], key, content);
        return <TextBlock style={style} key={key}>{content}</TextBlock>;
    };
}

const TEXTBLOCK_CONSTRUCTORS = {
    align: (style, key, content) => <Align {...style} key={key}>{content}</Align>,
    backing_color: (style, key, content) => <Backing_color {...style} key={key}>{content}</Backing_color>,
    color: (style, key, content) => <Color {...style} key={key}>{content}</Color>,
    ellipsis: (style, key, content) => <Ellipsis {...style} key={key}>{content}</Ellipsis>,
    font: (style, key, content) => <Font {...style} key={key}>{content}</Font>,
    font_fallback: unsupported('font_fallback'),
    font_size: (style, key, content) => <Font_size {...style} key={key}>{content}</Font_size>,
    font_source: unsupported('font_source'),
    font_style: (style, key, content) => <Font_style {...style} key={key}>{content}</Font_style>,
    font_weight: (style, key, content) => <Font_weight {...style} key={key}>{content}</Font_weight>,
    font_width: (style, key, content) => <Font_width {...style} key={key}>{content}</Font_width>,
    gfx_filter: unsupported('gfx_filter'),
    glow_color: (style, key, content) => <Glow_color {...style} key={key}>{content}</Glow_color>,
    glow2_color: unsupported('glow2_color'),
    item: unsupported('item'),
    lang: unsupported('lang'),
    linesize: (style, key, content) => <Linesize {...style} key={key}>{content}</Linesize>,
    linerelsize: unsupported('linerelsize'),
    linegap: unsupported('linegap'),
    linerelgap: unsupported('linerelgap'),
    linefill: unsupported('linefill'),
    left_margin: (style, key, content) => <Left_margin {...style} key={key}>{content}</Left_margin>,
    password: (style, key, content) => <Password {...style} key={key}>{content}</Password>,
    outline_color: (style, key, content) => <Outline_color {...style} key={key}>{content}</Outline_color>,
    right_margin: (style, key, content) => <Right_margin {...style} key={key}>{content}</Right_margin>,
    shadow_color: (style, key, content) => <Shadow_color {...style} key={key}>{content}</Shadow_color>,
    strikethrough: (style, key, content) => <Strikethrough {...style} key={key}>{content}</Strikethrough>,
    strikethrough_color: (style, key, content) => <Strikethrough_color {...style} key={key}>{content}</Strikethrough_color>,
    style: (style, key, content) => <Style {...style} key={key}>{content}</Style>,
    tabstops: (style, key, content) => <Tabstops {...style} key={key}>{content}</Tabstops>,
    underline: (style, key, content) => <Underline {...style} key={key}>{content}</Underline>,
    underline_color: (style, key, content) => <Underline_color {...style} key={key}>{content}</Underline_color>,
    underline2_color: unsupported('underline2_color'),
    underline_dash_color: (style, key, content) => <Underline_dash_color {...style} key={key}>{content}</Underline_dash_color>,
    // Sets the width of the underline dash. The value should be a number.
    underline_dash_width: unsupported('underline_dash_width'),
    // Sets the gap of the underline dash. The value should be a number.
    underline_dash_gap: unsupported('underline_dash_gap'),
    // Sets the height of the single underline. The value should be a floating number.
    underline_height: unsupported('underline_height'),
    valign: (style, key, content) => <Valign {...style} key={key}>{content}</Valign>,
    wrap: (style, key, content) => <Wrap {...style} key={key}>{content}</Wrap>,
};

const minIndex = (text, pattern) => {
    const index = text.indexOf(pattern);
    return (index === -1) ? Infinity : index;
};

/**
 * Parse EFL evas textblocks and return them as an array of strings & React Components
 * @param {string} text text to parse
 * @param {string} [parentId] id of the parent node if main level
 * @returns {Array}
 */
export default function parseRichText(text, parentId) {

    let textToParse = text;
    const textBlock = [];

    while (textToParse) {
        const startTagMatch = textToParse.match('<([a-z0-9_]+)=.*>');

        if (!startTagMatch) {
            // pure text content only
            textBlock.push(textToParse);
            break;
        }

        const [, tagType] = startTagMatch;
        const startTagIndex = textToParse.indexOf(`<${tagType}=`);

        if (startTagIndex > 0) {
            // extract the plain text before the tag
            textBlock.push(textToParse.substr(0, startTagIndex));
            textToParse = textToParse.substr(startTagIndex);
        }

        const selfClosedIndex = minIndex(textToParse, '/>');
        const endTagIndex = minIndex(textToParse, `</${tagType}>`);

        const hasContent = endTagIndex < selfClosedIndex;

        let params;
        let content;

        if (hasContent) {
            const contentIndex = textToParse.indexOf('>');
            content = textToParse.substring(contentIndex + 1, endTagIndex);
            params = textToParse.substring(1, contentIndex);
            textToParse = textToParse.substr(endTagIndex + tagType.length + 3);
        } else {
            params = textToParse.substring(1, selfClosedIndex - 1);
            textToParse = textToParse.substr(selfClosedIndex + 2);
        }

        const evasStyle = {};

        params.split(' ')
            .forEach(property => {
                const [key, value] = property.split('=');
                evasStyle[key] = value;
            });

        const textBlockConstructor = TEXTBLOCK_CONSTRUCTORS[tagType];
        if (textBlockConstructor) {
            const key = `${parentId}#textblock[${textBlock.length}]`;
            const richContent = parseRichText(content);
            const node = textBlockConstructor(evasStyle, key, richContent);
            if (node) {
                textBlock.push(node);
            }
        } else {
            console.warn('Unsupported evas textblock type', tagType);
        }
    }

    return textBlock;
}
