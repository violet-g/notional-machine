import React from 'react'
import PropTypes from 'prop-types'
import ExpressionWrapper from './ExpressionWrapper'
import FlowWrapper from './FlowWrapper'
import Line from './Line'
import Token from './Token'
import Flow from './flow/Flow'
import Popover from './flow/Popover'

/** Determine indentation of a line **/
function getIndent (line) {
  return line.match(/^\s*/)[0].length
}

/** Split line into tokens **/
function tokenize (line) {
  return line.replace(/^\s*/, '').split(' ')
}

/** Represents the program code used in the exercise **/
const CodeFragment = ({ fragment, expressions, flows, line, expression, flow, token, popover }) => {
  const lineProps = Object.assign({}, line)
  const tokenProps = Object.assign({}, token)
  const flowProps = Object.assign({}, flow)
  const popoverProps = Object.assign({}, popover)

  const lines = fragment.split('\n')

  return (
    <div className="CodeFragment card card-body">
      <div className="list-group code">
        <Line line={0} {...lineProps} start>START</Line>
        {lines.map((line, i) =>
          <Line {...lineProps} line={i+1} key={i+1} indent={getIndent(line)}>
            <ExpressionWrapper expressions={expressions.filter(expr => expr.line === i + 1)} expression={expression}>
              {tokenize(line).map((token, j) =>
                <Token
                  {...tokenProps}
                  key={`${i+1}_${j}`}
                  line={i+1}
                  token={j}
                  content={token}
                />
              )}
            </ExpressionWrapper>
          </Line>
        )}
        <Line line={lines.length + 1} {...lineProps} end>FINISH</Line>
      </div>
      <FlowWrapper>
        {flows.map((flow, i) =>
          <Flow {...flowProps} key={i} id={flow.id} start={flow.start_row} end={flow.end_row} />
        )}
      </FlowWrapper>
      {popover.flowId && <Popover {...popoverProps} flows={flows} />}
    </div>
  )
}

CodeFragment.defaultProps = {
  expressions: [],
  flows: [],
  popover: {}
}

CodeFragment.propTypes = {
  /** The code fragment as string **/
  fragment: PropTypes.string.isRequired,

  /** An optional array of selected expressions. **/
  expressions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    line: PropTypes.number.isRequired,
    start_pos: PropTypes.number.isRequired,
    end_pos: PropTypes.number.isRequired
  })),

  /** An optional array of flows. **/
  flows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    start_row: PropTypes.number.isRequired,
    end_row: PropTypes.number.isRequired
  })),

  /** Props which are passed down to the line components **/
  line: PropTypes.object,

  /** Props which are passed down to the expression components **/
  expression: PropTypes.object,

  /** Props which are passed down to the flow components **/
  flow: PropTypes.object,

  /** Props which are passed down to the token components **/
  token: PropTypes.object,

  /** Display a popover next to a flow, for annotating it **/
  popover: PropTypes.shape({
    flowId: PropTypes.number,
    onClick: PropTypes.func
  })
}

export default CodeFragment
