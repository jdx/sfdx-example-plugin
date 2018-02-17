import {expect, test} from '@oclif/test'

describe('hello:foo:bar', () => {
  test
  .stdout()
  .command(['hello:foo:bar'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['hello:foo:bar', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
