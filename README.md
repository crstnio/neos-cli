@crstn/neos-cli
===============

A simple, quite opinionated CLI for the Neos CMS.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@crstn/neos-cli.svg)](https://npmjs.org/package/@crstn/neos-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@crstn/neos-cli.svg)](https://npmjs.org/package/@crstn/neos-cli)
[![License](https://img.shields.io/npm/l/@crstn/neos-cli.svg)](https://github.com/crstnio/neos-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

Currently, there is only one command that downloads [Neos-Skeleton](https://github.com/code-q-web-factory/Neos-Skeleton) and continues with some steps from the [getting started](https://github.com/code-q-web-factory/Neos-Skeleton/blob/master/docs/GETTING_STARTED.md) guide for a convenient project setup.

What it does:

1. Clones the repository.
2. If set, `NEOS_PACKAGE_NAME` and `COMPOSER_PACKAGE_NAME` are replaced (only OS X / BSD is supported at this time).
3. Removes the `docs` folder.
4. Removes `.git` and initiates a new Git repository.
5. Installs dependencies with `composer install`.

<!-- usage -->
```sh-session
$ npm install -g @crstn/neos-cli
$ neos download PROJECT_NAME --neos_package_name="YourCompany.Site" --composer_package_name="yourcompany\/site"
```
<!-- usagestop -->

If you wish, omit these flags and export the shell variables `NEOS_PACKAGE_NAME` and `COMPOSER_PACKAGE_NAME` before using this CLI.

# Commands

<!-- commands -->
* [`neos help [COMMAND]`](#neos-help-command)
* [`neos hello [FILE]`](#neos-download-project_name)

## `neos help [COMMAND]`

display help for neos

```
USAGE
  $ neos help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_

## `neos download [PROJECT_NAME]`

download boilerplate for new projects

```
USAGE
  $ neos download [PROJECT_NAME]

OPTIONS
  -c, --composer_package_name=composer_package_name  new composer package name
  -h, --help                                         show CLI help
  -n, --neos_package_name=neos_package_name          new site package name


EXAMPLE
  $ neos download --neos_package_name="YourCompany.Site" --composer_package_name="yourcompany\/site"

```

_See code: [src/commands/download.ts](https://github.com/crstnio/neos-cli/blob/master/src/commands/download.ts)_
<!-- commandsstop -->
