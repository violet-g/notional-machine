import React from 'react'

function getFlowsBetweenAdjacentLines (flows) {
  return flows.filter(flow => flow.props.start === flow.props.end - 1)
}

function getFlowsBetweenNonAdjacentLines (flows) {
  return flows.filter(flow => flow.props.start !== flow.props.end - 1)
}

const FlowWrapper = ({ children }) => {
  const flows = React.Children.toArray(children)
  const flowsBetweenAdjacentLines = getFlowsBetweenAdjacentLines(flows)
  const flowsBetweenNonAdjacentLines = getFlowsBetweenNonAdjacentLines(flows)

  return (
    <div className="FlowContainer">
      {flowsBetweenAdjacentLines}
      <svg>{flowsBetweenNonAdjacentLines}</svg>
    </div>
  )
}

export default FlowWrapper
