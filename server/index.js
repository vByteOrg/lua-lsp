var parser = require('luaparse');
var code = `
a = 0;
b = a;

function foo() 
    c = 15;
    while c > 0 do
        c = c - 1;
    end
    return a + b;
end
`
var ast = parser.parse(code);
console.log(JSON.stringify(ast));
