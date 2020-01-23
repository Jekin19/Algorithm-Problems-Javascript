const STATE = {
  INTEGER: "INTEGER",
  DECIMAL: "DECIMAL",
  START: "START",
  UNKNOWN: "UNKNOWN",
  AFTER_DECIMAL: "AFTER_DECIMAL"
};

let get_next_state = function(currentState, ch) {
  switch (currentState) {
    case STATE.START:
    case STATE.INTEGER: {
      if (ch >= 0 && ch < 9) {
        return STATE.INTEGER;
      } else if (ch === ".") {
        return STATE.DECIMAL;
      } else return STATE.UNKNOWN;
    }
    case STATE.AFTER_DECIMAL:
    case STATE.DECIMAL: {
      if (ch >= 0 && ch < 9) {
        return STATE.AFTER_DECIMAL;
      } else {
        return STATE.UNKNOWN;
      }
    }
  }
  return STATE.UNKNOWN;
};

let is_number_valid = function(s) {
  if (!s) {
    return false;
  }

  let i = 0;
  if (s[i] === "+" || s[i] === "-") {
    i++;
  }

  let current_state = STATE.START;

  for (let l = i; l < s.length; l++) {
    current_state = get_next_state(current_state, s[l]);
    if (current_state === STATE.UNKNOWN) {
      return false;
    }
  }

  if (current_state === STATE.DECIMAL) {
    return false;
  }

  return true;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Is Valid Number");
console.log("---------------------------------------");

console.log('is this number valid "4.325" = ' + is_number_valid("4.325"));
console.log('is this number valid "4.325a" = ' + is_number_valid("4.325a"));
console.log('is this number valid "x4.325" = ' + is_number_valid("x4.325"));
console.log('is this number valid "4.32.5" = ' + is_number_valid("4.32.5"));
console.log('is this number valid "4325" = ' + is_number_valid("4325"));
console.log('is this number valid "1." = ' + is_number_valid("1."));
console.log('is this number valid "1.1." = ' + is_number_valid("1.1."));
console.log('is this number valid "1.1.1" = ' + is_number_valid("1.1.1"));
console.log('is this number valid "1.1.1." = ' + is_number_valid("1.1.1."));
console.log('is this number valid "+1.1." = ' + is_number_valid("+1.1."));
console.log('is this number valid "+1.1" = ' + is_number_valid("+1.1"));
console.log('is this number valid "-1.1." = ' + is_number_valid("-1.1."));
console.log('is this number valid "-1.1" = ' + is_number_valid("-1.1"));
console.log('is this number valid "" = ' + is_number_valid(""));
