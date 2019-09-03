module.exports = {
    'env': {
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'eol-last': [
            'error',
            'always'
        ],
        'no-trailing-spaces': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 2,
                'maxEOF': 1
            }
        ]
    }
};
