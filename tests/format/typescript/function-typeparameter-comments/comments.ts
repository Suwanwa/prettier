declare function a
    /*[FLOW2DTS - Warning] Covariance and contravariance are ignored.*/
    <T, U, V extends Number, W = String>(t: T, u: U, v: V, w: W): void;

function declaration
  /* type parameters */
  <T>(value: T): T {
  return value;
}

const expression = function named
  /* type parameters */
  <T>(value: T): T {
  return value;
};

function inline /* type parameters */ <T>(value: T): T {
  return value;
}

function ownLine
  // type parameters
  <T>(value: T): T {
  return value;
}

function endOfLine // type parameters
  <T>(value: T): T {
  return value;
}

function multiple
  /* first */
  /* second */
  <T>(value: T): T {
  return value;
}

const anonymous = function
  /* type parameters */
  <T>(value: T): T {
  return value;
};
