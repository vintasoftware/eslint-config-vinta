# Versioning

We use [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) to manage our releases.

## Major Releases

- Major releases are published as `X.0.0`. This number [*must be incremented if any backwards incompatible changes are introduced*](https://semver.org/spec/v2.0.0.html#spec-item-8).
- This type of release is used when there are changes on how we structure our rules, plugins and recommended configurations.

## Minor Releases

- Minor releases are published as `0.Y.0`. This number [*must be incremented if new, backwards compatible functionality is introduced*](https://semver.org/spec/v2.0.0.html#spec-item-7).
- This type of release is used when a new rule is added, which usually implies that a third-party plugin or ESLint itself added a new rule. Or when a rule is enabled/disabled.

## Patch Releases

- Patch releases are published as `0.0.Z`. This number [*must be incremented if only backwards compatible bug fixes are introduced.*](https://semver.org/spec/v2.0.0.html#spec-item-6)
- This type of release is used when an existing rule configuration has changed, or when bugs are fixed.
