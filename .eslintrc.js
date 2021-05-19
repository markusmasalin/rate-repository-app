module.exports = {
    'env': {
        'browser': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    "parser": "babel-eslint",
    'plugins': [
        'react'
    ],
    'rules': {
        "react/prop-types": "off",
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'semi': [
            'error'
        ]
    }
}
