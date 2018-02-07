# Airtable Starter

A boilerplate for [Airtable](https://airtable.com/), Node & React applications.

## Getting Started

### The Project Source

```bash
$ cd ~/Projects/
$ git clone --depth=1 git@github.com:timdavish/airtable-starter.git myproject
$ cd myproject/
$ direnv allow
$ npm install
```

You can then delete the `.git` directory and run `git init` to initialize the project as it's own git repository.

### Configuring Airtable

Edit the `.env` file, adding your Airtable API key, base, and table which can be found [here](https://airtable.com/api). This file looks like this:

```bash
export AIRTABLE_API_KEY=
export AIRTABLE_API_VERSION=0.1.0
export AIRTABLE_API_URL=https://api.airtable.com/v0
export AIRTABLE_BASE=
export AIRTABLE_TABLE=
```

### Run the App

```bash
$ npm start
```
