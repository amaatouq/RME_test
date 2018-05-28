# Reading the mind in the eyes (RME) Test

This is an experiment powered by [Empirica](https://github.com/empiricaly/empirica) (here is a basic [tutorial](https://github.com/empiricaly/tutorial)) as an implementation [Reading the mind in the eyes (RME) test](https://www.autismresearchcentre.com/arc_tests).

## Experiment Demo:
You and a group of friends can play with this experiment as we ran it by following these instructions (assuming you have [Meteor installed](https://www.meteor.com/install)):
1. [Download](https://github.com/amaatouq/RME_test/archive/master.zip) the repository (and unzip). Alternatively,from terminal just run:
```git clone https://github.com/amaatouq/RME_test.git```
2. Go into the folder with `cd influence-in-small-group-discussions`
3. Install the required dependencies `meteor npm install`
4. Run the local instance with `meteor`
5. Go to http://localhost:3000/admin (or whatever port you are running Meteor on).
6. login with the credentials found in `/import/core/startup/server/bootstrap.js`
7. Start a new batch with whatever configuration you want (see documentation about experiment configuration).