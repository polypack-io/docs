---
title: Installation
description: How to install Polypack
order: 3
---

# Platform Specifics

## Install locally

To contribute to Polypack and run it locally, you have the option of using Laravel Sail.

If you're familiar with devcontainers, then there's one included in the repository that will get you started in no time.

You'll need to configure the `.env` file to connect to your database.

```bash
cp .env.example .env
```

Once you've made the necessary changes, you can migrate the database:

```bash
php artisan migrate
# or if you use Sail:
sail artisan migrate
```

The included seeder will create a user with the following credentials:

```
Email: hello@polypack.io
Password: password
```

Some tasks run in jobs, so you'll need to start a worker to run them:

```bash
php artisan queue:listen
# or if you use Sail:
sail artisan queue:listen
```
or if you use Sail: