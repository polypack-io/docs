---
title: Installation
description: How to install Polypack
lastUpdated: 2025-04-03
sidebar:
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

## One Step Install

This quick installation is designed to get you up and running fast, but may not be suitable for high-availability deployments.

### Requirements

* [Docker](https://docs.docker.com/engine/install/)
* A domain of your choice
    * Record(s) for the Polypack UI
    * Record(s) for the Minio Object Storage API
    * Record(s) for the Minio Object Storage Console UI
* A valid email address for LetsEncrypt certificate provisioning
* A non-root user

### Run the setup companion
You'll need to answer a few questions and the script will automatically update (or create) your .env, and then start the project.
```sh
sh setup.sh
```

If you choose to seed the database with credentials, they are set as follows:

```
Email: hello@polypack.io
Password: password
```

### Restart the deployment
In the event you want to restart or bring up your instance, you should use the following command.
```sh
sh restart.sh
```