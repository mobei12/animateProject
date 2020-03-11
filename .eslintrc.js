module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: [
        "eslint:recommended", "plugin:vue/base"
    ],
    parserOptions: {
        parser: "babel-eslint",
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: "module"
    },
    plugins: ["prettier"],
    rules: {
        semi: [2, "always"], //语句强制分号结尾
        "no-extra-semi": 2, //禁止多余的分号
        eqeqeq: ["error", "smart"], //必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
        "prettier/prettier": [
            0,
            {
                endOfLine: "auto"
            }
        ],
        "no-unused-vars": 'off', //参数未使用警告
        'no-irregular-whitespace': ["error", {
            "skipComments": true //允许在注释中出现任何空白字符
        }],
        'no-mixed-spaces-and-tabs': ["error", "smart-tabs"]
    }
};
