module.exports = {
	extends: ["stylelint-config-recommended", "stylelint-config-standard"],
	plugins: ["stylelint-order"],
	rules: {
		indentation: ["tab", { severity: "warning" }] /* 缩进 */,
		"color-hex-case": [
			"lower",
			{ severity: "warning" }
		] /*十六进制使用小写*/,
		"selector-combinator-space-after": [
			"always",
			{ severity: "warning" }
		] /*在选择符之后必须有一个空格。*/,
		"selector-combinator-space-before": [
			"always",
			{ severity: "warning" }
		] /*在选择符之前必须有一个空格。*/,
		"at-rule-empty-line-before": [
			"always",
			{ severity: "warning" }
		] /*在选择符之前必须有一个空行。*/,
		"comment-whitespace-inside": ["never"] /* 注释前后没有空格 */
	}
};
