---
layout: page
title: Building this website
#permalink: /learning/
---
As the Digital Humanities engage with different levels of computing it is important to consider longevity and transparency engaging digital humanities under constraints of software, network capacity, power, and other aspects.
For building this website the team adheres to the principles of minimal computing by using Jekyll as a platform to generate a static website and WAX as its theme to build a digtal collection. 

## Minimal computing
In order to spend more time on 
Minimal computing  advocates for using only the technologies that are necessary and sufficient for developing digital humanities scholarship. It centers around fundamental questions regarding choice and necessity:
 - “What do we need?”
 - “What don’t we need?”
 - “What do we want?”
 - “What don’t we want?”

The term 'minimal' refers to minimal design, minimal maintenance, minimal dependencies, and minimal connectivity.

## Jekyll
Jekyll is a static site generator (SSG) written and run on the RUBY programming language. Unless you are a developer no knowledge of RUBY is required. Static websites consist of flat HTML, CSS, and JavaScript files that don’t need to communicate in a complex way back to a server. This makes them cheaper, safer, and generally easier to maintain—as long as you’re willing to learn some new skills.

Jekyll is designed to create sites based on principles of minimal computing. The platform uses plain text files in markdown syntax to create HTML files. Thus, for the creation of simple sites no prior knowledge of HTML or CSS is needed. The generated HTML files can be deployed to a web server. Jekyll offers a variety of themes by means of which different types of websites can be created. 

The Urarina Digital Heritage Project is an digital collection exhibit for which the WAX Jekyll theme was employed. A collection site is a complex site, and even more so if it aims to be a trilingual site. Plug-ins help to to add functionality, hovever some developping sklills were needed at some point.

### Plugins

You can learn more about using Jekyll on the [Jekyll docs](https://jekyllrb.com/docs/) or in [this tutorial](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages) by Amanda Visconti at Programming Historian.



## WAX
[Wax](https://minicomp.github.io/wax/) is a Jekyll theme. It depends on metadata created in a .csv sheet that records the data of a collection. 

WAX has implemented Facets, a tool .....

To learn more about setting up and using Wax visit [the Wax wiki](https://minicomp.github.io/wiki/wax/).

 ### Facets
 Facets is a theme of WAX. acets allows users to browse through a collection using facets, or filters. When we are browsing through a collection of cultural artifacts, we often want to reduce the number of objects in front of us to a small collection that fits a very specific criteria. 

As other WAX sites it depends on the .csv metadata sheet. Thus the .csv sheet contains columns that classify objects with respect to type and material.

As other Wax sites, _Facets_ depends on the metadata you create. Let's assume you are using a CSV to record data for your collection. In order for _Facets_ to work, that CSV must have designated columns for each large category you want to "facet" by. These become the _facet headers_ at the top of the drop-down menus above the gallery. Each of these columns then accepts a small range of sub-categories, or _facet values_. These become the check boxes.




