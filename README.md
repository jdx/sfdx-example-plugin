sfdx-example-plugin
===================



[![Version](https://img.shields.io/npm/v/sfdx-example-plugin.svg)](https://npmjs.org/package/sfdx-example-plugin)
[![CircleCI](https://circleci.com/gh/jdxcode/sfdx-example-plugin/tree/master.svg?style=shield)](https://circleci.com/gh/jdxcode/sfdx-example-plugin/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/jdxcode/sfdx-example-plugin?branch=master&svg=true)](https://ci.appveyor.com/project/heroku/sfdx-example-plugin/branch/master)
[![Codecov](https://codecov.io/gh/jdxcode/sfdx-example-plugin/branch/master/graph/badge.svg)](https://codecov.io/gh/jdxcode/sfdx-example-plugin)
[![Greenkeeper](https://badges.greenkeeper.io/jdxcode/sfdx-example-plugin.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/jdxcode/sfdx-example-plugin/badge.svg)](https://snyk.io/test/github/jdxcode/sfdx-example-plugin)
[![Downloads/week](https://img.shields.io/npm/dw/sfdx-example-plugin.svg)](https://npmjs.org/package/sfdx-example-plugin)
[![License](https://img.shields.io/npm/l/sfdx-example-plugin.svg)](https://github.com/jdxcode/sfdx-example-plugin/blob/master/package.json)

<!-- toc -->
* [Install](#install)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
<!-- install -->
# Install

with yarn:
```
$ yarn global add sfdx-example-plugin
```

or with npm:
```
$ npm install -g sfdx-example-plugin
```
<!-- installstop -->
<!-- usage -->
# Usage

```sh-session
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
sfdx-example-plugin/0.0.0 (darwin-x64) node-v9.5.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
# Commands

* [oclif-example hello [FILE]](#hello-file)
## hello [FILE]

describe the command here

```
USAGE
  $ oclif-example hello [FILE]

OPTIONS
  -f, --force
  -n, --name=name  name to print

EXAMPLES
  $ oclif-example hello
  hello world from ./src/hello.ts!

  $ oclif-example hello --name myname
  hello myname from .src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/jdxcode/sfdx-example-plugin/blob/v0.0.0/src/commands/hello.ts)_
<!-- commandsstop -->
