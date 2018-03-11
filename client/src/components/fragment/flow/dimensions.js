export const ARROWHEAD_SIZE = 4

export const CODE_FRAGMENT_WIDTH = 400

export const CODE_FRAGMENT_PADDING_VERTICAL = 40

export const CODE_FRAGMENT_PADDING_HORIZONTAL = 80

export const LINE_WIDTH = 198 + 40 + 2

export const LINE_HEIGHT = 23.2 + 24 + 2

export const ADJACENT_LINES_ARROW_SVG_WIDTH = 20

export const ADJACENT_LINES_ARROW_SVG_HEIGHT = 30

export const FLOW_WIDTH = 100

export const FLOW_COLOR_DEFAULT = '#3d3d3d'

export const FLOW_COLOR_CORRECT = '#28a745'

export const FLOW_COLOR_INCORRECT = '#dc3545'

export function getLineY (lineIdx) {
  return CODE_FRAGMENT_PADDING_VERTICAL + lineIdx * LINE_HEIGHT + LINE_HEIGHT / 2
}

export function getFlowColor (correct, incorrect) {
  if (!correct && !incorrect) {
    return FLOW_COLOR_DEFAULT
  }
  return correct ? FLOW_COLOR_CORRECT : FLOW_COLOR_INCORRECT
}
