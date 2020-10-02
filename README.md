<p align="center">
    <img src="https://raw.githubusercontent.com/gruntjs/gruntjs.com/master/src/img/grunt-logo-no-wordmark.svg"/>
</p>

# Combine Files

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

---

## 📝 Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

[Checkout CHANGELOG.md](/CHANGELOG.md)

## 🤝 Contributing
If you would like to help, please take a look at the list of [issues](issues/).

## 💰 Sponsor
[I][twitter] fell in love with open-source in 2013 and there has been no looking back since! You can read more about me [here][website].
If you, or your company, use any of my projects or like what I’m doing, kindly consider backing me. I'm in this for the long run.

- ☕ How about we get to know each other over coffee? Buy me a cup for just [**$9.99**][buymeacoffee]
- ☕️☕️ How about buying me just 2 cups of coffee each month? You can do that for as little as [**$9.99**][buymeacoffee]
- 🔰         We love bettering open-source projects. Support 1-hour of open-source maintenance for [**$24.99 one-time?**][paypal]
- 🚀         Love open-source tools? Me too! How about supporting one hour of open-source development for just [**$49.99 one-time ?**][paypal]

## 📜  License & Conduct
- [**General Public License v3.0 license**](LICENSE) © [Varun Sridharan](website)
- [Code of Conduct](code-of-conduct.md)

## 📣 Feedback
- ⭐ This repository if this project helped you! :wink:
- Create An [🔧 Issue](issues/) if you need help / found a bug

## Connect & Say 👋
- **Follow** me on [👨‍💻 Github][github] and stay updated on free and open-source software
- **Follow** me on [🐦 Twitter][twitter] to get updates on my latest open source projects
- **Message** me on [📠 Telegram][telegram]
- **Follow** my pet on [Instagram][sofythelabrador] for some _dog-tastic_ updates!

---

<p align="center">
<i>Built With ♥ By <a href="https://sva.onl/twitter"  target="_blank" rel="noopener noreferrer">Varun Sridharan</a> 🇮🇳 </i>
</p>

---

<!-- Personl Links -->
[paypal]: https://sva.onl/paypal
[buymeacoffee]: https://sva.onl/buymeacoffee
[sofythelabrador]: https://www.instagram.com/sofythelabrador/
[github]: https://sva.onl/github/
[twitter]: https://sva.onl/twitter/
[telegram]: https://sva.onl/telegram/
[email]: https://sva.onl/email
[website]: https://sva.onl/website/