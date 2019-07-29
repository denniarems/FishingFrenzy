# FishHunting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




# CED-B3-G06


## Add your Git username and set your email

On your shell, type the following command to add your username:
```
git config --global user.name "YOUR_USERNAME"
```
To set your email address, type the following command:
```
git config --global user.email "your_email_address@example.com"
```

To verify that you entered your username and email correctly, type:
```
git config --global user.name
git config --global user.email
```


## Basic Git commands

### Clone a repository
To start working locally on an existing remote repository, clone it with the command git clone <repository path>. By cloning a repository, you’ll download a copy of its files into your local computer, preserving the Git connection with the remote repository.

You can find both paths (HTTPS and SSH) by navigating to your project’s landing page and clicking Clone. GitLab will prompt you with both paths, from which you can copy and paste in your command line.

To get started, open a terminal window in the directory you wish to clone the repository files into, and run one of the following commands.
```
git clone https://gitlab.com/ced_b3_projects/ced-b3-g06

```
This command will download a copy of the files in a folder named after the project’s name.

You can then navigate to the directory and start working on it locally.

### Go to the master branch to pull the latest changes from there
```
git checkout master
```
### Download the latest changes in the project
This is for you to work on an up-to-date copy (it is important to do this every time you start working on a project), while you set up tracking branches. You pull from remote repositories to get all the changes made by users since the last time you cloned or pulled the project. Later, you can push your local commits to the remote repositories.
```
git pull
```
### Add and commit local changes
You’ll see your local changes in red when you type git status. These changes may be new, modified, or deleted files/folders. Use git add to stage a local file/folder for committing. Then use git commit to commit the staged files:
```
git add FILE OR FOLDER
git commit -m "COMMENT TO DESCRIBE THE INTENTION OF THE COMMIT"
```
### Send changes to GitLab.com
To push all local commits to the remote repository:
```
git push
```