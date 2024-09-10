/* eslint-env meteor */
Package.describe({
  name: 'aldeed:autoform',
  summary:
    'Easily create forms with automatic insert and update, and automatic reactive validation.',
  git: 'https://github.com/aldeed/meteor-autoform.git',
  version: '7.1.0'
})

Npm.depends({
  'mongo-object': '3.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom('3.0')

  // Dependencies
  api.use(
    [
      'livedata',
      'deps',
      'templating',
      'ui',
      'blaze',
      'ejson',
      'reactive-var',
      'reactive-dict',
      'random',
      'ecmascript',
      'mongo'
    ],
    'client'
  )

  api.use('jquery@1.11.10 || 3.0.0', 'client')

  api.use(
    [
      'momentjs:moment',
      'mrt:moment-timezone',
      'aldeed:collection2',
      'aldeed:moment-timezone',
      'reload'
    ],
    'client',
    { weak: true }
  )

  // Exports
  api.export('AutoForm', 'client')

  // adding the core files in order to keep it backwards-compatible with
  // extensions and themes
  api.addFiles([
    './utility.js',
    './form-preserve.js',
    './autoform-hooks.js',
    './autoform-formdata.js',
    './autoform-arrays.js',
    './autoform.js',
    './autoform-validation.js',
    './autoform-inputs.js',
    './autoform-api.js'
  ], 'client')
})

Package.onTest(function (api) {
  // Running the tests requires a dummy project in order to
  // resolve npm dependencies and the test env dependencies.
  api.use(['meteortesting:browser-tests', 'meteortesting:mocha'])
  api.use(
    [
      'ecmascript',
      'tracker',
      'blaze',
      'templating',
      'mongo',
      'momentjs:moment',
      'aldeed:autoform',
      'aldeed:moment-timezone'
    ],
    'client'
  )

  // api.addFiles(["tests/utility-tests.js", "tests/autoform-tests.js"]);
  api.mainModule('tests/testSuite.tests.js', 'client')
})
