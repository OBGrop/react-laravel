// resources/assets/js/components/NewProject.js

import axios from 'axios'
import React, { Component } from 'react'

class NotFound extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            errors: []
        }
    }

    render() {
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>404</div>
                            <div className='card-body'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound