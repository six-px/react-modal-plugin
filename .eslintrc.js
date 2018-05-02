// 这个配置文件并非实际规则文件，而是便于editor进行自动严格规则调整以及辨识错误的判定文件
module.exports = {
  root: true,
  parser: 'babel-eslint',

  plugins: ['import', 'flowtype', 'jsx-a11y', 'react'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },

  settings: {
    'import/ignore': [
      'node_modules',
      '\\.(json|css|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)$',
    ],
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    }
  },

  extends: 'airbnb',

  "rules": {
    // 中文地址 http://cn.eslint.org/docs/rules
    // 自定义覆盖规则

    // 分号不要手动添加风格。在 "never" 方式下，分号仍然是被允许的，用来消除以[、(、/、+ 或 -开头的语句的歧义
    'semi': ['error', 'never'],
    // 统一使用js文件后缀
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['off'],
    // 对于交互元素DOM【a, button, input, select, textarea, area】基本带有浏览器默认样式
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
    'jsx-a11y/no-static-element-interactions': 'off',
    // 关闭这条检测
    'jsx-a11y/href-no-hash': 'off',
    // 强制限定一个函数不得超过60行，12号字体一屏幕高度大概在40行左右，限制2屏幕以内
    "max-statements": ["error", 80, { "ignoreTopLevelFunctions": true }],
    // 嵌套深度不能超过3层
    "max-depth": ["error", 3],
    // 回调函数最多3层
    "max-nested-callbacks": ["error", 3],
    // 函数参数个数限制在3个以内
    "max-params": ["error", 3],
    // 设置一个圈复杂度阈值10来控制函数的复杂度
    "complexity": ["error", 10],
    // 轻量级调试时临时使用console语句
    'no-console': 'warn',
  }
}
