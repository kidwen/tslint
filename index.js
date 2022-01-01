module.exports = {
    "extends": [
        "codelyzer",
        "tslint-eslint-rules"
    ],
    "rules": {
        "template-banana-in-box": "error",
        "contextual-lifecycle": "error",
        "contextual-decorator": "error",
        "no-pipe-impure": "error",
        "template-no-negated-async": "error",
        "component-max-inline-declarations": "off",
        "no-attribute-decorator": "error",
        "no-conflicting-lifecycle": "error",
        "no-forward-ref": "off",
        "no-input-prefix": [
            "off",
            "can",
            "is",
            "should",
            "has"
        ],
        "no-input-rename": "error",
        "no-lifecycle-call": "off",
        "no-output-native": "error",
        "no-output-on-prefix": "off",
        "no-output-rename": "error",
        "template-no-call-expression": "error",
        "no-unused-css": "error",
        "prefer-output-readonly": "error",
        "template-conditional-complexity": [
            "error",
            3
        ],
        "template-cyclomatic-complexity": "off",
        "template-use-track-by-function": "off",
        "use-lifecycle-interface": "error",
        "use-pipe-decorator": "error",
        "use-pipe-transform-interface": "error",
        "use-component-view-encapsulation": "error",
        "relative-url-prefix": "error",
        "template-accessibility-alt-text": "off",
        "template-accessibility-elements-content": "off",
        "template-accessibility-label-for": "off",
        "template-accessibility-tabindex-no-positive": "off",
        "template-accessibility-table-scope": "off",
        "template-accessibility-valid-aria": "off",
        "template-click-events-have-key-events": "off",
        "template-mouse-events-have-key-events": "error",
        "template-no-autofocus": "error",
        "template-no-distracting-elements": "error",
        "template-no-any": "error",
        "component-class-suffix": [
            "error",
            "Component"
        ],
        "component-selector": [
            "error",
            "element",
            "",
            "kebab-case"
        ],
        "directive-class-suffix": [
            "error",
            "Directive"
        ],
        "directive-selector": [
            "error",
            "attribute",
            "",
            "camelCase"
        ],
        "use-component-selector": "error",
        "import-destructuring-spacing": "error",
        "no-queries-metadata-property": "error",
        "pipe-prefix": "off",
        "prefer-inline-decorator": "off",
        "no-host-metadata-property": "error",
        "no-inputs-metadata-property": "error",
        "no-outputs-metadata-property": "error",
        "no-commented-code": "off",
        "cognitive-complexity": "off",
        "no-nested-template-literals": "off",
        "use-type-alias": "off",
        "bool-param-default": "off",
        "no-duplicate-string": [
            "error",
            5
        ],
        "adjacent-overload-signatures": "error",
        "ban-ts-ignore": "error",
        "ban-types": [
            "error",
            [
                "Object",
                "Use {} instead."
            ],
            [
                "String"
            ]
        ],
        "member-access": [
            "error",
            "check-accessor",
            "check-constructor",
            "check-parameter-property"
        ],
        "member-ordering": [
            "error",
            {
                "order": "instance-sandwich"
            }
        ],
        "no-any": "off",
        "no-empty-interface": "error",
        "no-import-side-effect": "off",
        "no-inferrable-types": "off",
        "no-internal-module": "error",
        "no-magic-numbers": "off",
        "no-namespace": [
            "error",
            "allow-declarations"
        ],
        "no-non-null-assertion": "off",
        "no-parameter-reassignment": "off",
        "no-reference": "error",
        "no-unnecessary-type-assertion": "off",
        "no-var-requires": "error",
        "only-arrow-functions": [
            "error",
            "allow-declarations",
            "allow-named-functions"
        ],
        "prefer-for-of": "off",
        "promise-function-async": "error",
        "typedef": [
            "error",
            "call-signature",
            "parameter",
            "property-declaration",
            "variable-declaration",
            "member-variable-declaration"
        ],
        "typedef-whitespace": [
            "error",
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
        "unified-signatures": "error",
        "await-promise": "error",
        "ban-comma-operator": "error",
        "ban": [
            "error",
            [
                "eval"
            ]
        ],
        "curly": "error",
        "forin": "error",
        "function-constructor": "error",
        "import-blacklist": "off",
        "label-position": "error",
        "no-arg": "error",
        "no-bitwise": "error",
        "no-conditional-assignment": "error",
        "no-console": [
            "error",
            {
                "allow": [
                    "info",
                    "warn",
                    "error"
                ]
            }
        ],
        "no-construct": "error",
        "no-debugger": "error",
        "no-duplicate-super": "error",
        "no-duplicate-switch-case": "error",
        "no-duplicate-variable": "error",
        "no-dynamic-delete": "error",
        "no-empty": [
            "error",
            {

                "allowEmptyCatch": true
            }
        ],
        "no-eval": "error",
        "no-floating-promises": "error",
        "no-for-in-array": "error",
        "no-implicit-dependencies": "off",
        "no-inferred-empty-object-type": "error",
        "no-invalid-template-strings": "error",
        "no-invalid-this": [
            "error"
        ],
        "no-misused-new": "error",
        "no-null-keyword": "off",
        "no-object-literal-type-assertion": "error",
        "no-return-await": "error",
        "no-shadowed-variable": "error",
        "no-sparse-arrays": "error",
        "no-string-literal": "off",
        "no-string-throw": "error",
        "no-submodule-imports": "off",
        "no-switch-case-fall-through": "error",
        "no-this-assignment": "error",
        "no-unbound-method": [
            "error",
            "ignore-static"
        ],
        "no-unsafe-any": "error",
        "no-unsafe-finally": "error",
        "no-unused-expression": "error",
        "no-var-keyword": "error",
        "no-void-expression": [
            "error",
            "ignore-arrow-function-shorthand"
        ],
        "prefer-conditional-expression": "error",
        "prefer-object-spread": "error",
        "radix": "error",
        "restrict-plus-operands": "error",
        "strict-boolean-expressions": [
            "off",
            "allow-null-union",
            "allow-undefined-union",
            "allow-string",
            "allow-number",
            "allow-boolean-or-undefined"
        ],
        "switch-default": "error",
        "triple-equals": "off",
        "unnecessary-constructor": "error",
        "use-default-type-parameter": "error",
        "use-isnan": "error",
        "cyclomatic-complexity": [
            "error",
            45
        ],
        "deprecation": "error",
        "eofline": "error",
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "max-classes-per-file": [
            "error",
            1
        ],
        "max-file-line-count": [
            "off",
            300
        ],
        "max-line-length": [
            "off",
            120
        ],
        "no-default-export": "error",
        "no-default-import": "error",
        "no-mergeable-namespace": "error",
        "no-require-imports": "error",
        "object-literal-sort-keys": "off",
        "prefer-const": [
            "off",
            {
                "destructuring": "all"
            }
        ],
        "prefer-readonly": "off",
        "trailing-comma": [
            "error",
            {
                "multiline": "always",
                "singleline": "never"
            }
        ],
        "align": [
            "error",
            "members",
            "parameters",
            "statements"
        ],
        "array-type": [
            "error",
            "generic"
        ],
        "arrow-parens": [
            "error",
        ],
        "arrow-return-shorthand": [
            "error",
            "multiline"
        ],
        "binary-expression-operand-order": "error",
        "callable-types": "error",
        "class-name": "error",
        "comment-format": [
            "error",
            "check-space"
        ],
        "comment-type": [
            "error",
            "singleline",
            "doc"
        ],
        "completed-docs": [
            "off",
            "enums",
            "functions"
        ],
        "encoding": "error",
        "file-header": [
            "off",
            "Copyright \\d{4}"
        ],
        "file-name-casing": [
            "error",
            "kebab-case"
        ],
        "import-spacing": "error",
        "increment-decrement": [
            "error",
            "allow-post"
        ],
        "interface-name": [
            "error",
            "never-prefix"
        ],
        "interface-over-type-literal": "error",
        "jsdoc-format": [
            "error",
            "check-multiline-start"
        ],
        "match-default-export-name": "error",
        "newline-before-return": "off",
        "newline-per-chained-call": "off",
        "new-parens": "error",
        "no-angle-bracket-type-assertion": "error",
        "no-boolean-literal-compare": "error",
        "no-consecutive-blank-lines": "error",
        "no-irregular-whitespace": "error",
        "no-parameter-properties": "off",
        "no-redundant-jsdoc": "error",
        "no-reference-import": "error",
        "no-trailing-whitespace": "error",
        "no-unnecessary-callback-wrapper": "error",
        "no-unnecessary-initializer": "error",
        "no-unnecessary-qualifier": "error",
        "number-literal-format": "error",
        "object-literal-key-quotes": [
            "error",
            "consistent"
        ],
        "object-literal-shorthand": "error",
        "one-line": [
            "error",
            "check-catch",
            "check-finally",
            "check-else",
            "check-open-brace",
            "check-whitespace"
        ],
        "one-variable-per-declaration": [
            "error",
            "ignore-for-loop"
        ],
        "ordered-imports": [
            "error",
            {
                "import-sources-order": "lowercase-last",
                "named-imports-order": "case-insensitive"
            }
        ],
        "prefer-function-over-method": [
            "off",
            "allow-public",
            "allow-protected"
        ],
        "prefer-method-signature": "error",
        "prefer-switch": [
            "error",
            {
                "min-cases": 3
            }
        ],
        "prefer-template": [
            "error"
        ],
        "prefer-while": "error",
        "quotemark": [
            "error",
            "single"
        ],
        "return-undefined": "error",
        "semicolon": [
            "error",
            "always"
        ],
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "space-within-parens": "error",
        "switch-final-break": [
            "error",
            "always"
        ],
        "type-literal-delimiter": "error",
        "unnecessary-bind": "error",
        "variable-name": [
            "error",
            "ban-keywords",
            "check-format",
            "allow-leading-underscore"
        ],
        "whitespace": [
            "error",
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
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-duplicate-case": "error",
        "no-empty-character-class": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-semi": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-regex-spaces": "error",
        "no-unexpected-multiline": "error",
        "valid-typeof": "error"
    }
}
