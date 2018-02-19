import React from 'react'

const FlowContainer = ({ children }) => {
  const directFlows = React.Children.toArray(children).filter(child => child.props.startLine === child.props.endLine - 1)
  const nonDirectFlows = React.Children.toArray(children).filter(child => child.props.startLine !== child.props.endLine - 1)

  return (
    <div className="FlowContainer">
      {directFlows}
      <svg>{nonDirectFlows}</svg>
    </div>
  )
}

export default FlowContainer
