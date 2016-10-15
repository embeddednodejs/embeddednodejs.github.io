
ast = {};
const add = 1;
const load = 2;
const store = 3;

ast.Program = function(instrs) {

  var i=0;
  var out = [];
  while (instrs[i]) {
    var instr=instrs[i];
    var hexVal=instr.hexVal;
    out.push(hexVal);

    i++;
  }
  console.log(out);
};

ast.AddStmt = function(op1, op2) {
  var op1hex = 0;
  switch (op1) {
    case 'r1' : op1hex = 1; break;
    case 'r2' : op1hex = 2; break;
    case 'r3' : op1hex = 3; break;
    case 'r4' : op1hex = 4; break;
    default: break;
  }

  switch (op2) {
    case 'r1' : op2hex = 1; break;
    case 'r2' : op2hex = 2; break;
    case 'r3' : op2hex = 3; break;
    case 'r4' : op2hex = 4; break;
    default: break;
  }
  var hexVal=(0x1 << 16) + (op1hex << 8) + op2hex; 
  return {type: add, hexVal: hexVal};
};

ast.LoadStmt = function(args) {
  return {type: load};
};

ast.StoreStmt = function(args) {
  return {type: store};
};

/*
    switch (instr.type) {
      case add:  hexVal=0x1 << 16 + instr.op1 ; break;
      case load:  hexVal=0x2 << 16  + instr.op2 ; break;
      case store:  hexVal=0x3 << 16 ; break;
      default: break;
    }
*/

// module.exports = ast;
AddStmt = ast.AddStmt;
LoadStmt = ast.AddStmt;
Program = ast.Program;

