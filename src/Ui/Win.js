import React, {Component} from 'react'

export let DPI = 96;

/**
 * @class Win
 * @extends Component
 * @see https://www.enlightenment.org/develop/api/efl/ui/win
 */
export default class Win extends Component {
    render() {
        const { icon, dpi, children } = this.props;

        if (icon) {
            (function() {
                const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                link.type = 'image/svg+xml';
                link.rel = 'shortcut icon';
                link.href = icon;
                document.getElementsByTagName('head')[0].appendChild(link);
            })();
        }

        if (dpi) {
            DPI = dpi;
        }

        return <div className={'win'}>{children}</div>
    }
}
