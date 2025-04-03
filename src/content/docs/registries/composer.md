---
title: Composer
description: Polypack supports Composer package management.
lastUpdated: 2025-04-03
icon: github
---

Polypack is able to serve Composer packages.

## Configuration

Composer packages must be sourced from a repository, so ensure you have one configured first.

When creating a new composer package, you will select the repository you want to use, as well as the usual package details.

Composer packages must be named like `vendor/package`.

## Authentication

Staff users and clients will authenticate using a token for private packages.

### Using a token

A bearer token can be configured using composer, as documented [here](https://getcomposer.org/doc/articles/authentication-for-private-packages.md#http-bearer).

An example `auth.json` file for a private Polypack hosted registry might look like this:

```json
{
	"bearer": {
		"https://registry.polypack.io/api/composer": "{{ POLYPACK_TOKEN }}"
    }
}
```

