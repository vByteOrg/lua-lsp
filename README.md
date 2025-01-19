### lua-lsp

A language server for Lua, written in Javascript. Also includes a vscode extension client.

`/server` - Contains the language server implementation. \
`/client` - Contains the vscode extension client.

### Roadmap

- [ ] Integrate lua parser written in JS.
- [ ] Build global symbol table from AST.
- [ ] Implement extension for vscode client (setup pipeline for debugging & feedback loop).
- [ ] Implement basic language server features like hover, go to definition, etc.
- [ ] Start working on basic colorization.

### Recommended reading

#### References
- Action script LSP: https://github.com/admvx/as2-language-support
- LSP spec: https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/

#### Dev References
- For server: https://www.npmjs.com/package/vscode-languageserver
- For client extension reference (actionscript ref): https://github.com/admvx/as2-language-support/tree/main/client
- Lua (JS-based) parser: https://github.com/fstirlitz/luaparse
