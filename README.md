# Jekyll Playground

## Directories

## _includes

Files that are included in the layouts or pages.

## _layouts

The layouts for pages.

## _posts

Blog posts. Check the [Jekyll docs](https://jekyllrb.com/docs/posts/) for more information.

## _sass

sass files. We are not using it.

## _site

This directory contains the generated site. This directory is deployed to S3.

## assets

Our non-theme custom css, js and images files are here. 

`vendor` directory is for third party libraries like bootstrap and jquery, etc. We have copied this directory from the theme.

## _docs

Custom pages for the site.

## _data

We have stored details of authors, menu structure, etc. in yaml format that are referenced in the layouts and pages. 

## theme-pages

Copy of all the pages from the theme.

## Components

### Dynamic menu and tree structure

We support generating tree structure and rendering it as a menu or a tree in the sidebar. 

It is a yaml file in the `_data` directory. Entries have title and url attributes. It can have a children attribute which is an array of entries. Entries with children are rendered as a tree. Entries without children are rendered as containers -- in the case of menu they expand on hover and in the case of sidebar they expand on click. The menu (`_includes/dynamic-menu.html`) and sidebar (`_includes/docstree.html`) use the same structure but render it differently.

### Authors

The authors' details are stored in the `_data/authors.yml`. Layout file for author page is author.html.  `_authors` directory have the author pages.

### Tags

We have created `tag_pages` layout for tag pages. It just lists the posts with that tag. `_tags` directory have the tag pages that use this layout.

### Images

This is a custom component for embedding images. It is similar to the video component. It is used as follows:

```
{% include image.html src='/assets/images/akuri.jpg' alt='Akuri image' float='right' url='https://google.com' caption='Awesome Akuri' width=150 height=150 %}
```

`float` is optional. If it is not specified, the image will occupy the entire width of its container element. Supported values are: `left`, `right`, `full`.

### Video

This _includes is for embedding video files. To use it, add the following to the page:

```
{% include video.html src="VIDEO_URL" poster="POSTER_URL" caption="CAPTION" width="WIDTH" height="HEIGHT" float="left" %}
```

`VIDEO_URL` can be a video file. Youtube video cannot be used as a source here. Youtube has a separate mechanism for embedding videos.
`float` is optional. If it is not specified, the video will occupy the entire width of its container element. Supported values are: `left`, `right`, `full`.



### Search

1. `lunr.js` - full-text search library 
2. `jQuery` 
3. `search.json` - a JSON file containing the data (post title, tags, url, date, etc.) which Lunr.js will index for searching
4. `search.js` - our custom js script that handles fetching the `search.json` file, indexing the data with Lunr.js, and manipulating the DOM to display search results

Search box UI is taken from the theme. 

## Deployment

We use Github Actions for CI/CD. We have configured a workflow that builds the Jekyll site and deploys it to S3.