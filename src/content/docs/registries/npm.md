---
title: NPM
description: Polypack supports NPM package management.
lastUpdated: 2025-04-03
---

Polypack is able to serve NPM packages.

## Configuration

NPM packages are not sourced from a repository. Packages are published using the `npm publish` command as usual.

## Authentication

Staff users and clients will authenticate using a token for private packages and for publishing packages.

### Using a token

Private registries can be configured in the `.npmrc` file.

An example `.npmrc` file for a private Polypack hosted registry might look like this:

```bash
@polypack:registry=https://registry.polypack.io/api/npm/
//registry.polypack.io/api/npm/:_authToken={{ POLYPACK_TOKEN }}
```

The scope `@polypack` is used as an example.

For publishing packages, the scope must match the scope used in the package.json file.

But for retrieving packages, you can use any scope you want but it must be consistent.

Our recommendation is to pick a scope that makes sense for your organization and use that scope consistently.

# Supported Commands

The following commands are supported, others might work but have not been tested:

- `npm install`
- `npm publish`
- `npm dist-tag <add|rm|list> <package-name> <tag-name>`