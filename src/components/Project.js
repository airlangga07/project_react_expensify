import React from 'react';

const Project = (props) => {
  return (
    <div>{props.match.params.id}</div>
  )
}

export default Project;