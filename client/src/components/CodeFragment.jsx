import React from 'react'

function handleMouseUp(onHighlight) {
  let selection = (document.all) ? document.selection.createRange().text :
    document.getSelection().toString()
  if (selection != "") {
    onHighlight(selection)
    if (document.all) {
      document.selection.empty()
    } else {
      document.getSelection().removeAllRanges()
    }
  }
}

const CodeFragment = ({ codeFragment, onHighlight }) => (
  <pre onMouseUp={() => handleMouseUp(onHighlight)}>{ codeFragment }</pre>
)

export default CodeFragment
