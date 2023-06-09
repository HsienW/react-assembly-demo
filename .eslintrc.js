module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint"
    ],
    "parser": "babel-eslint",
    "rules": {
        "no-console": 0,
        "linebreak-style": 0,
        "react/jsx-uses-vars": 1,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-indent": [
            2,
            4
        ],
        "react/jsx-indent-props": [
            2,
            4
        ],
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "react/forbid-prop-types": [
            1,
            {
                "forbid": [
                    "any",
                ]
            }
        ],
        "react/jsx-boolean-value": [
            0
        ]
    }
};
