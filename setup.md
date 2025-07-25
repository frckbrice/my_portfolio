# Prettier & ESLint Setup Guide

This guide will help you set up Prettier and ESLint in your project, ensuring consistent code formatting and clean code on every push.

---

## 1. Install Prettier and ESLint Plugins

From your project directory (`my_portfolio`):

```sh
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

---

## 2. Create/Edit Prettier Config

Create a `.prettierrc` file in the root of `my_portfolio`:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

---

## 3. Integrate Prettier with ESLint

Edit `.eslintrc.json` to include Prettier:

```json
{
  "extends": ["next/core-web-vitals", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

---

## 4. Add Prettier Scripts to `package.json`

Add these scripts to your `package.json`:

```json
"scripts": {
  "prettier:check": "prettier --check .",
  "prettier:write": "prettier --write ."
}
```

---

## 5. (Recommended) Enforce Formatting on Push with Husky

1. Install Husky:
   ```sh
   yarn add -D husky
   ```
2. Initialize Husky and add a pre-push hook:
   ```sh
   npx husky install
   npx husky add .husky/pre-push "yarn lint && yarn prettier:check"
   ```
3. (If needed) Set hooks path:
   ```sh
   git config core.hooksPath .husky
   ```

---

## 6. Usage

- **Check formatting:**
  ```sh
  yarn prettier:check
  ```
- **Auto-fix formatting:**
  ```sh
  yarn prettier:write
  ```
- **Lint and format before every push:**
  The pre-push hook will block pushes with lint or formatting errors.

---

## 7. Tips

- Use your editor's Prettier extension for auto-formatting on save.
- Adjust `.prettierrc` and ESLint rules to match your team's style.
- Run `yarn lint --fix` to auto-fix some lint issues.

---

**Now your project will always have clean, consistent code!**
