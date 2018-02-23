import { CODE_FRAGMENT_PADDING_VERTICAL, LINE_HEIGHT } from './dimensions'

export function getLineY (lineIdx) {
  return CODE_FRAGMENT_PADDING_VERTICAL + lineIdx * LINE_HEIGHT + LINE_HEIGHT / 2
}

export function getFlowColor (correct, incorrect) {
  if (!correct && !incorrect) {
    return '#3d3d3d'
  }
  return correct ? '#28a745' : '#dc3545'
}
