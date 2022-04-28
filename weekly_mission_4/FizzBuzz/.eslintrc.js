module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        indent: ["warn", 4],
        "linebreak-style": ["warn", "windows"],
        quotes: ["warn", "double"],
        semi: ["warn", "always"]
    }
};