// resources/assets/js/components/ProjectsList.js

import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { setListTask } from '../actions/task';
class ProjectsList extends Component {
  constructor() {
    super()
    this.state = {
      tasks: []
    }
  }

  async  componentDidMount() {
    const listTask = await axios.get('/api/task').then(response => {
      return response.data;
    })

    this.props.setListTask(listTask);

  }

  render() {
    const { listTask } = this.props
    console.log(listTask);
    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header'>All projects</div>
              <div className='card-body'>
                <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                  Create new project
                   </Link>
                <ul className='list-group list-group-flush'>
                  {listTask.map(task => (
                    <li
                      className='list-group-item d-flex justify-content-between align-items-center'
                      key={task.id}
                    >
                      {task.title}

                      <Link className='btn btn-primary btn-sm'  to={`/update/${task.id}`}>
                        Mark as completed
                          </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function bindActions(dispatch) {
  return {
    setListTask: (listTask) => dispatch(setListTask(listTask))
  };
}

const mapStateToProps = state => (
  {
    listTask: state.task.listTask
  });


export default connect(mapStateToProps, bindActions)(ProjectsList)