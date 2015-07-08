# Ember picture-element addon

**!!WARNING!! This is totally work in progress!**

PR's welcome :-)

TODO Privide better intro!

Provides a picture element helper to use as:

Option 1:

```

<h1>Awesome News</h1>

<img {{src-set src="image1.png" sizes="1200,640,320"}}>

```

translates to this DOM:
```
<h1>Awesome News</h1>

<img src="image1.png" srcset="image1-1200.png 1200w, image1-640.png 640w, image1-320.png 320w">

```


More felxibel (WIP):

```

<h1>Awesome News</h1>

<img {{src-set
            src="image1.png"
            sizes="2,1,0.5,0.3"
            paths="x-large,large,medium,small"
            del="@"
            descriptor="x"}}>

```

translates to this DOM:
```
<h1>Awesome News</h1>

<img src="image1.png" srcset="image1@x-large.png 2x,image1@large.png 1x,image1@medium.png 0.5x,image1@small.png 0.3x">
```


## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
