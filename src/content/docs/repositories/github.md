---
title: GitHub
description: Polypack supports GitHub repositories.
lastUpdated: 2025-04-03
---

Polypack can use GitHub as a source for packages. A webhook is used to trigger package updates whenever a branch is pushed to, or a tag is pushed.

## Configuration

Polypack requires a PAT with the following permissions:

- `contents:read`
- `webhooks:read`
- `webhooks:write`

## Webhook

A webhook is used to trigger package updates whenever a branch is pushed to, or a tag is pushed.


