import globals from "globals";
import pluginJs from "@eslint/js";
import { defineFlatConfig } from "eslint-define-config";
import configPrettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import * as parserVue from "vue-eslint-parser";
import pluginVue from "eslint-plugin-vue";
export default defineFlatConfig([
  {
    ignores: ["**/node_modules", "**/assets", "**/public", "**/bin"],
    files: ["**/*.{js,mjs,cjs,jsx,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: true
      }
    }
  },
  pluginJs.configs.recommended,
  {
    name: "global-config",
    rules: {
      ...configPrettier.rules
    }
  },
  pluginPrettier,
  {
    files: ["**/*.vue"],
    languageOptions: {
      globals: {
        $: "readonly",
        $$: "readonly",
        $computed: "readonly",
        $customRef: "readonly",
        $ref: "readonly",
        $shallowRef: "readonly",
        $toRef: "readonly"
      },
      parser: parserVue,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        extraFileExtensions: [".vue"]
      }
    },
    plugins: {
      vue: pluginVue
    },
    processor: pluginVue.processors[".vue"],
    rules: {
      ...pluginVue.configs.base.rules,
      ...pluginVue.configs["vue3-essential"].rules,
      ...pluginVue.configs["vue3-recommended"].rules,
      "no-undef": "off",
      "no-unused-vars": "off",
      "vue/no-v-html": "off",
      "vue/require-default-prop": "off",
      "vue/require-explicit-emits": "off",
      "vue/multi-word-component-names": "off",
      "vue/no-setup-props-reactivity-loss": "off",
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "always",
            component: "always"
          },
          svg: "always",
          math: "always"
        }
      ]
    }
  }
]);
