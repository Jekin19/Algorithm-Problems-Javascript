const operators = ["+", "-", "/", "*"];

let higherOperatorPrecedence = function(currentElement, topOperatorElement) {
  switch (topOperatorElement) {
    case "+":
    case "-":
      if (currentElement === "*" || currentElement === "/") {
        return false;
      } else {
        return true;
      }
    default:
      return true;
  }
};

let convertToPostfixExpression = function(expr) {
  const stack = [];
  const operatorExpression = [];
  for (let i = 0; i < expr.length; i++) {
    const element = expr[i];
    if (!operators.includes(element)) {
      stack.push(element);
    } else {
      const topOperatorElement =
        operatorExpression.length - 1 >= 0 ? operatorExpression[operatorExpression.length - 1] : null;
      if (!topOperatorElement) {
        operatorExpression.push(element);
      } else {
        if (higherOperatorPrecedence(element, topOperatorElement)) {
          while (operatorExpression.length > 0) {
            stack.push(operatorExpression.pop());
          }
        }
        operatorExpression.push(element);
      }
    }
  }
  while (operatorExpression.length > 0) {
    stack.push(operatorExpression.pop());
  }
  return stack;
};

let calculate = function(operator, op1, op2) {
  switch (operator) {
    case "+":
      return op2 + op1;
    case "-":
      return op2 - op1;
    case "*":
      return op2 * op1;
    case "/":
      return op2 / op1;
  }
};

let evaluatePostExpression = function(stack) {
  const operandStack = [];
  while (stack.length > 0) {
    const element = stack.shift();
    if (!operators.includes(element)) {
      operandStack.push(element);
    } else {
      const op1 = operandStack.pop();
      const op2 = operandStack.pop();
      operandStack.push(calculate(element, Number(op1), Number(op2)));
    }
  }
  return operandStack.pop();
};

let evaluate = function(expr) {
  return evaluatePostExpression(convertToPostfixExpression(expr));
};

console.log(evaluate(["3", "+", "6", "*", "5", "-", "1", "/", "2.5"]));
