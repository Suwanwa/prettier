function binaryInBinaryLeft() {
  return (
    // Reason for 42
    42
  ) * 84 + 2;
}

function binaryInBinaryRight() {
  return (
    // Reason for 42
    42
  ) + 84 * 2;
}

function remainder() {
  return (
    // Reason for 42
    42
  ) % 8 + 2;
}

const assignment = (
  // Keep the comment with the operand
  value
) * other + extra;

call((
  // Keep the comment with the operand
  value
) + other * extra);

const samePrecedence = (
  // Comment on an addition
  first + second
) + third;

const lowerPrecedence = (
  // Comment on an addition
  first + second
) * third;

const logical = (
  // Comment on the condition
  first
) && second && third;

const blockComment = (
  /* Comment on the operand */
  first
) + second * third;

const sequence = (
  // Keep both expressions within the operand
  first, second
) + third;

const inlineComment = (/* inline */ first) + second;

const ignored = (
  // prettier-ignore
  first +  second
) * third;

const rightComment = first + (
  // Comment on the right operand
  second
) * third;
