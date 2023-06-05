# Plastic Machine

## Getting Started
Open a terminal to your development folder where you keep your projects

```bash
# grab the code
git clone https://github.com/toddpress/plastic-machine.git

# change directories into plastic-machine
cd plastic-machine

# install node dependencies
npm i
```

This will clone the latest code, downloading it into a `plastic-machine` directory in your project directory. Lastly, we install all of the necessary dependencies with npm.

## Open the code

Get started with your awesome contributions in the IDE of your choice. If you use VS Code like me and other basically sane people, you can drag and drop the plastic-machine directory on top of VS code or run this in the terminal session from earlier:

```shell
# Open code in the only IDE worth using for now
code .
```

## Developing

Once you've cloned/downloaded the source code, run these commands to get started:

```bash
npm run dev
```

Check out a "feature branch" and make some awesome changes, commit them, then "push" them up to the repo and create a "pull request."

```shell
git checkout -b my-awesome-feature

# ... make your changes, then commit them:

git add . && git commit -m "make awesome changes"

# push them up to the remote repo

git push -u origin main
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
