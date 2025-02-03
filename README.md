# prettier-plugin-emoji

A Prettier plugin that properly handles emoji shortcodes in markdown files.

## Installation

```bash
npm install --save-dev prettier-plugin-markdown-preserve-emoji
```

## Usage

After installation, you'll need to add the plugin to your Prettier configuration.

Add it to your `.prettierrc` (or `.prettierrc.json`):
```json
{
  "plugins": ["prettier-plugin-markdown-preserve-emoji"]
}
```

Or specify it via command line:
```bash
prettier --plugin=prettier-plugin-markdown-preserve-emoji --write "**/*.md"
```

This plugin ensures that emoji shortcodes (like `:smile:`) are properly preserved during formatting, especially when they contain underscores.

## Example

Input:
```markdown
Hello, this is an emoji with underscore :sweat_smile: and _italics words_
```

Output (preserved incorrectly):
```markdown
Hello, this is an emoji with underscore :sweat*smile: and \_italics words*
```

Output (preserved correctly):
```markdown
Hello, this is an emoji with underscore :sweat_smile: and _italics words_
```



## Configuration

No additional configuration is needed. The plugin works out of the box with Prettier.

## License

MIT