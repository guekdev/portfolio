import React, { Component } from 'react';

const axios = require('axios');

const URL = "http://localhost:5000/api/projects";

export default class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      myData: []
    }
  }

  componentDidMount() {
    this.readData()
    console.log(this.state.myData)
  }

  readData = () => {
    axios.get(URL)
    .then(res => {
      console.log(res)
      this.setState({
        myData: res.data
      })
    })
    .catch(error => {
      console.log(error + "(Failed to load API)")
    })
  }

  render() {
    let projectList = this.state.myData.map((project) => {
      return (
        <div className="project-con" key={project._id}>
          <h1>
            {project.name}
          </h1>
          <p>
            {project.info}
          </p>
          <a href={project.url}>
            <p>
              To website
            </p>
          </a>
          <br />
        </div>
      );
    });

    return (
      <div id="project-list">
        {projectList}
      </div>
    );
  }
}
