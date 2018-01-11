import React, {Component} from 'react'

/**
 * @class Win
 * @extends Component
 * @see https://www.enlightenment.org/develop/api/efl/ui/win
 */
export default class Win extends Component {
    render() {
        return <div className={'win'}>{this.props.children}</div>
    }
}
