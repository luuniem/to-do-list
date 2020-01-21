import React from "react";

const TaskList = props => {
  const { theList } = props;
  return <div className="container">{theList}</div>;
};

export default TaskList;
