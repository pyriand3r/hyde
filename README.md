# Hyde

simple, blog-aware, **dynamic** sites

-------

Do you ever wanted a simple yet blazing fast blogging software? Then you should give [jekyll](http://jekyllrb.com/) a try. But jekyll is restricted to static sites only as it generates plain html-pages for every post etc. No dynamic fancy stuff like background-color changes etc.  

So here comes **Hyde**, combining all the benefits from jekyll with the awesome possibilities of a dynamic website.

----

## How does it work?

Hyde changes only the way jekyll is used, i have not changed one line of code of the jekyll parser itself (to be honest i haven't even looked inside the code).  
Hyde uses the power of [AngularJS](http://angularjs.org) to inject every new jekyll "site" into the main view, giving you the possibility to use custom html-tags (angular calls it directives) to trigger DOM manipulations. In addition you can use [jQuery](http://jquery.com) to manipulate the DOM, using fancy css-animations etc.

----

## Structure

The main structure of the site is equal to the jekyll style of doing things, as i said i haven't changed the jekyll parser, so you can use all the cool stuff like layouts that jekyll offers you. The only difference is, how you create your layouts.

#### index.html

In my example the main index.html is more or less empty as i make use of the index template. This way you can use the jekyll front-matters to inject variables into the index.html.

As an alternative you can copy all content from the index template into the index.html and provide the site-name etc. hardcoded. Important is, that you don't delete the `ng-app`-attribute inside the `<html>` starting-tag, the `<div ng-view></div>` and the angular dependencies.

#### home.html

The `home.html` is the main landing page (as would be the index.html) as it is the first page injected when loading the site.

>In the example the header and footer are inside the index template so they are present on every page. If you don't want this behaviour move them to your templates. this way you can control what kind of header is shown on different pages.

----

### Templates

All templates - except the `index.html` - should be partials and no complete html-sites. Be aware that every html-file generated by jekyll is injected into the `<div ng-view></div>` tag of the index.html, so you don't need the `<html>` tags.

#### index.html

The index.html template is the main "wrapper"-site in which all content is injected. Change it to the way your site should look like.

### Writing posts

Writing posts is as you know it from jekyll. Write them in the way jekyll wants you to. Inside the front-matter you can create custom variables with which you can then manipulate the DOM. I recommend using a custom html-tag, providing your additional data as an attribute to this custom tag. This way you can easily access the data inside an angular-directive to make use of it.