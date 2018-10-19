# grunt-combine-files

> This plugin will allow you to combine multiple JS files using (@grunt-append / @grunt-prepend / @grunt-inline)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-combine-files --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-combine-files');
```

## The "combine_files" task

### Overview
In your project's Gruntfile, add a section named `combine_files` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  combine_files: {
  	/**
  	* Custom Keyword you need to use it as //@grunt-append | //@your-custom-keyword or set it to fales to disable this feature
  	* This works for all (append | prepend | inline)
  	* 
  	* Add Feature works as inline append eg
  	* it adds the files contents on where the add comment is used
    */
    options: {
    	append: 'grunt-append', 
        prepend: 'grunt-prepend',
        inline: 'grunt-inline',
    },
    your_target: {
      append:false,
      prepend:'fileappend', // Use it as //@fileappend filename.js
      inline:'inline', // Use it as //@inline filename.js
    },
  },
});
```

### Options

#### options.append
Type: `String|Bool`
Default value: `'grunt-append'`

A string value that is used to do something with whatever.

#### options.prepend
Type: `String|false`
Default value: `'grunt-prepend'`

A string value that is used to do something else with whatever else.

#### options.inline
Type: `String|false`
Default value: `'grunt-inline'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`
```js
grunt.initConfig({
  Combine_Files: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  Combine_Files: {
    options: {
        append:false,
        prepend:'fileappend', // Use it as //@fileappend filename.js
        add:'inline', // Use it as //@inline filename.js
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## Sponsored By
[![DigitalOcean](https://vsp.ams3.cdn.digitaloceanspaces.com/cdn/DO_Logo_Horizontal_Blue.png)](https://s.svarun.in/Ef)