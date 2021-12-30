module.exports = {
    "extends": [
        "codelyzer",
        "tslint-eslint-rules"
    ],
    "rules": {
        "template-banana-in-box": true,
        "contextual-lifecycle": true,
        "contextual-decorator": true,
        "no-pipe-impure": true,
        "template-no-negated-async": true,
        "component-max-inline-declarations": false,
        "no-attribute-decorator": true,
        "no-conflicting-lifecycle": true,
        "no-forward-ref": false,
        "no-input-prefix": [
            false,
            "can",
            "is",
            "should",
            "has"
        ],
        "no-input-rename": true,
        "no-lifecycle-call": false,
        "no-output-native": true,
        "no-output-on-prefix": false,
        "no-output-rename": true,
        "template-no-call-expression": true,
        "no-unused-css": true,
        "prefer-output-readonly": true,
        "template-conditional-complexity": [
            true,
            3
        ],
        "template-cyclomatic-complexity": false,
        "template-use-track-by-function": false,
        "use-lifecycle-interface": true,
        "use-pipe-decorator": true,
        "use-pipe-transform-interface": true,
        "use-component-view-encapsulation": true,
        "relative-url-prefix": true,
        "template-accessibility-alt-text": false,
        "template-accessibility-elements-content": false,
        "template-accessibility-label-for": false,
        "template-accessibility-tabindex-no-positive": false,
        "template-accessibility-table-scope": false,
        "template-accessibility-valid-aria": false,
        "template-click-events-have-key-events": false,
        "template-mouse-events-have-key-events": true,
        "template-no-autofocus": true,
        "template-no-distracting-elements": true,
        "template-no-any": true,
        "component-class-suffix": [
            true,
            "Component"
        ],
        "component-selector": [
            true,
            "element",
            "",
            "kebab-case"
        ],
        "directive-class-suffix": [
            true,
            "Directive"
        ],
        "directive-selector": [
            true,
            "attribute",
            "",
            "camelCase"
        ],
        "use-component-selector": true,
        "import-destructuring-spacing": true,
        "no-queries-metadata-property": true,
        "pipe-prefix": false,
        "prefer-inline-decorator": false,
        "no-host-metadata-property": true,
        "no-inputs-metadata-property": true,
        "no-outputs-metadata-property": true,
        "no-commented-code": false,
        "cognitive-complexity": false,
        "no-nested-template-literals": false,
        "use-type-alias": false,
        "bool-param-default": false,
        "no-duplicate-string": [
            "error",
            5
        ],
        "adjacent-overload-signatures": true,
        "ban-ts-ignore": true,
        "ban-types": [
            true,
            [
                "Object",
                "Use {} instead."
            ],
            [
                "String"
            ]
        ],
        "member-access": [
            true,
            "check-accessor",
            "check-constructor",
            "check-parameter-property"
        ],
        "member-ordering": [
            true,
            {
                "order": "instance-sandwich"
            }
        ],
        "no-any": false,
        "no-empty-interface": true,
        "no-import-side-effect": false,
        "no-inferrable-types": false,
        "no-internal-module": true,
        "no-magic-numbers": false,
        "no-namespace": [
            true,
            "allow-declarations"
        ],
        "no-non-null-assertion": false,
        "no-parameter-reassignment": false,
        "no-reference": true,
        "no-unnecessary-type-assertion": false,
        "no-var-requires": true,
        "only-arrow-functions": [
            true,
            "allow-declarations",
            "allow-named-functions"
        ],
        "prefer-for-of": false,
        "promise-function-async": true,
        "typedef": [
            true,
            "call-signature",
            "parameter",
            "property-declaration",
            "variable-declaration",
            "member-variable-declaration"
        ],
        "typedef-whitespace": [
            true,
            {
                "call-signature": "nospace",
                "index-signature": "nospace",
                "parameter": "nospace",
                "property-declaration": "nospace",
                "variable-declaration": "nospace"
            },
            {
                "call-signature": "onespace",
                "index-signature": "onespace",
                "parameter": "onespace",
                "property-declaration": "onespace",
                "variable-declaration": "onespace"
            }
        ],
        "unified-signatures": true,
        "await-promise": true,
        "ban-comma-operator": true,
        "ban": [
            true,
            [
                "eval"
            ]
        ],
        "curly": true,
        "forin": true,
        "function-constructor": true,
        "import-blacklist": false,
        "label-position": true,
        "no-arg": true,
        "no-bitwise": true,
        "no-conditional-assignment": true,
        "no-console": [
            true,
            "log",
            "table"
        ],
        "no-construct": true,
        "no-debugger": true,
        "no-duplicate-super": true,
        "no-duplicate-switch-case": true,
        "no-duplicate-variable": true,
        "no-dynamic-delete": true,
        "no-empty": [
            true,
            "allow-empty-catch"
        ],
        "no-eval": true,
        "no-floating-promises": true,
        "no-for-in-array": true,
        "no-implicit-dependencies": false,
        "no-inferred-empty-object-type": true,
        "no-invalid-template-strings": true,
        "no-invalid-this": [
            true,
            "check-function-in-method"
        ],
        "no-misused-new": true,
        "no-null-keyword": false,
        "no-object-literal-type-assertion": true,
        "no-return-await": true,
        "no-shadowed-variable": true,
        "no-sparse-arrays": true,
        "no-string-literal": false,
        "no-string-throw": true,
        "no-submodule-imports": false,
        "no-switch-case-fall-through": true,
        "no-this-assignment": true,
        "no-unbound-method": [
            true,
            "ignore-static"
        ],
        "no-unsafe-any": true,
        "no-unsafe-finally": true,
        "no-unused-expression": true,
        "no-var-keyword": true,
        "no-void-expression": [
            true,
            "ignore-arrow-function-shorthand"
        ],
        "prefer-conditional-expression": true,
        "prefer-object-spread": true,
        "radix": true,
        "restrict-plus-operands": true,
        "strict-boolean-expressions": [
            false,
            "allow-null-union",
            "allow-undefined-union",
            "allow-string",
            "allow-number",
            "allow-boolean-or-undefined"
        ],
        "switch-default": true,
        "triple-equals": false,
        "unnecessary-constructor": true,
        "use-default-type-parameter": true,
        "use-isnan": true,
        "cyclomatic-complexity": [
            true,
            45
        ],
        "deprecation": true,
        "eofline": true,
        "indent": [
            true,
            "spaces",
            4
        ],
        "linebreak-style": [
            true,
            "LF"
        ],
        "max-classes-per-file": [
            true,
            1
        ],
        "max-file-line-count": [
            false,
            300
        ],
        "max-line-length": [
            false,
            120
        ],
        "no-default-export": true,
        "no-default-import": true,
        "no-mergeable-namespace": true,
        "no-require-imports": true,
        "object-literal-sort-keys": false,
        "prefer-const": [
            false,
            {
                "destructuring": "all"
            }
        ],
        "prefer-readonly": false,
        "trailing-comma": [
            true,
            {
                "multiline": "always",
                "singleline": "never"
            }
        ],
        "align": [
            true,
            "members",
            "parameters",
            "statements"
        ],
        "array-type": [
            true,
            "generic"
        ],
        "arrow-parens": [
            true,
            "ban-single-arg-parens"
        ],
        "arrow-return-shorthand": [
            true,
            "multiline"
        ],
        "binary-expression-operand-order": true,
        "callable-types": true,
        "class-name": true,
        "comment-format": [
            true,
            "check-space"
        ],
        "comment-type": [
            true,
            "singleline",
            "doc"
        ],
        "completed-docs": [
            false,
            "enums",
            "functions"
        ],
        "encoding": true,
        "file-header": [
            false,
            "Copyright \\d{4}"
        ],
        "file-name-casing": [
            true,
            "kebab-case"
        ],
        "import-spacing": true,
        "increment-decrement": [
            true,
            "allow-post"
        ],
        "interface-name": [
            true,
            "never-prefix"
        ],
        "interface-over-type-literal": true,
        "jsdoc-format": [
            true,
            "check-multiline-start"
        ],
        "match-default-export-name": true,
        "newline-before-return": false,
        "newline-per-chained-call": false,
        "new-parens": true,
        "no-angle-bracket-type-assertion": true,
        "no-boolean-literal-compare": true,
        "no-consecutive-blank-lines": true,
        "no-irregular-whitespace": true,
        "no-parameter-properties": false,
        "no-redundant-jsdoc": true,
        "no-reference-import": true,
        "no-trailing-whitespace": true,
        "no-unnecessary-callback-wrapper": true,
        "no-unnecessary-initializer": true,
        "no-unnecessary-qualifier": true,
        "number-literal-format": true,
        "object-literal-key-quotes": [
            true,
            "consistent"
        ],
        "object-literal-shorthand": true,
        "one-line": [
            true,
            "check-catch",
            "check-finally",
            "check-else",
            "check-open-brace",
            "check-whitespace"
        ],
        "one-variable-per-declaration": [
            true,
            "ignore-for-loop"
        ],
        "ordered-imports": [
            true,
            {
                "import-sources-order": "lowercase-last",
                "named-imports-order": "case-insensitive"
            }
        ],
        "prefer-function-over-method": [
            false,
            "allow-public",
            "allow-protected"
        ],
        "prefer-method-signature": true,
        "prefer-switch": [
            true,
            {
                "min-cases": 3
            }
        ],
        "prefer-template": [
            true,
            "allow-single-concat"
        ],
        "prefer-while": true,
        "quotemark": [
            true,
            "single"
        ],
        "return-undefined": true,
        "semicolon": [
            true,
            "always"
        ],
        "space-before-function-paren": [
            true,
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "space-within-parens": true,
        "switch-final-break": [
            true,
            "always"
        ],
        "type-literal-delimiter": true,
        "unnecessary-bind": true,
        "variable-name": [
            true,
            "ban-keywords",
            "check-format",
            "allow-leading-underscore"
        ],
        "whitespace": [
            true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-module",
            "check-separator",
            "check-rest-spread",
            "check-type",
            "check-typecast",
            "check-type-operator",
            "check-preblock"
        ],
        "no-constant-condition": true,
        "no-control-regex": true,
        "no-duplicate-case": true,
        "no-empty-character-class": true,
        "no-ex-assign": true,
        "no-extra-boolean-cast": true,
        "no-extra-semi": true,
        "no-inner-declarations": true,
        "no-invalid-regexp": true,
        "no-regex-spaces": true,
        "no-unexpected-multiline": true,
        "valid-typeof": true
    }
}
