module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/essential", "eslint:recommended"],

    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        // 0 = off, 1 = warn, 2 = error
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-unused-vars": "off",
        "no-sparse-arrays": "off",
        "no-undef": "off",
        "no-var": "off",
    },
};
