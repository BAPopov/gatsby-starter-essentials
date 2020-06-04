module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'yarn format && yarn lint'
    // 'pre-push': 'yarn build'
  }
};