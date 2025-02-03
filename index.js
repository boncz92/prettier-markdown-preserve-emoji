'use strict';

const TEMP_MARKER = '§§EMOJI§§';

// We need to explicitly declare the languages we support
const languages = [
  {
    name: 'markdown',
    parsers: ['markdown']
  }
];

// Define our parsers
const parsers = {
  markdown: {
    ...require("prettier/parser-markdown").parsers.markdown,
    preprocess: (text) => {
      return text.replace(/:[^: ]+:/g, match =>
        match.replace(/_/g, TEMP_MARKER)
      );
    },
    parse: async (text, parsers, options) => {
      const originalParse = require("prettier/parser-markdown").parsers.markdown.parse;

      try {
        const ast = await originalParse(text, parsers, options);

        const processNode = (node) => {
          if (node.value) {
            node.value = node.value.replace(new RegExp(TEMP_MARKER, 'g'), '_');
          }
          if (node.children) {
            node.children.forEach(processNode);
          }
          return node;
        };

        processNode(ast);

        return ast;
      }
      catch (error) {
        console.error('Error parsing markdown:', error);
        throw error;
      }
    }
  }
};

// Export the plugin
module.exports = {
  languages,
  parsers
};