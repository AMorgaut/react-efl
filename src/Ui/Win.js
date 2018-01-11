import React, {Component} from 'react'

/**
 * @class Win
 * @extends Component
 * @see https://www.enlightenment.org/develop/api/efl/ui/win
 */
export default class Win extends Component {
    render() {
        const icon = this.props.icon;
        if (icon) {
            (function() {
                const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                link.type = 'image/x-icon';
                link.rel = 'shortcut icon';
                link.href = icon;
                document.getElementsByTagName('head')[0].appendChild(link);
            })();
        }
        return <div className={'win'}>{this.props.children}</div>
    }
}
