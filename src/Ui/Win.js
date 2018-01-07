import React, {Component} from 'react'

export default class Win extends Component {
    render() {
        return <div className={'win'}>{this.props.children}</div>
    }
}
