import {Command, flags} from '@oclif/command'
import {exec, cd, mv, rm} from 'shelljs'

// noinspection JSUnusedGlobalSymbols
export default class Download extends Command {
  static description = 'download boilerplate for new projects'

  static examples = [
    `$ neos download --neos_package_name="YourCompany.Site" --composer_package_name="yourcompany\\/site"`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    neos_package_name: flags.string({char: 'n', description: 'new site package name', env: 'NEOS_PACKAGE_NAME'}),
    composer_package_name: flags.string({char: 'c', description: 'new composer package name', env: 'COMPOSER_PACKAGE_NAME'}),
  }

  static args = [{name: 'project_name'}]

  async run() {
    const {args, flags} = this.parse(Download)

    const projectName = args.project_name ?? '.'
    const neosPackageName = flags.neos_package_name ?? ''
    const composerPackageName = flags.composer_package_name ?? ''

    exec(`git clone git@github.com:code-q-web-factory/Neos-Skeleton.git ${projectName}`)

    if (projectName !== '.') {
      cd(`${projectName}`)
    }

    if (neosPackageName) {
      mv(`./DistributionPackages/CodeQ.Site`, `./DistributionPackages/${neosPackageName}`)
      exec(`find ./DistributionPackages/${neosPackageName} -type f | xargs sed -i '' "s/CodeQ\\.Site/${neosPackageName}/g"`)
    }

    if (composerPackageName) {
      exec(`find . -type f -name 'composer.json' | xargs sed -i '' "s/codeq\\/site/${composerPackageName}/g"`)
    }

    rm(`-Rf`,`docs`)
    rm(`-rf`, `.git`)
    exec(`git init`)
    exec(`composer install`)
  }
}
