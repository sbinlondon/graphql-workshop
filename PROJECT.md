# Workshop

Georgia and Kate's graphql workshop for Fac 20 (with many thanks to @oliverjam for the [project structure](https://github.com/oliverjam/react-food-workshop)!)

## What to do

It's time to put our GraphQL knowledge to work.

This repo is a small React project that queries GraphQL API instead of a REST API with `fetch`.

We want you to craft your own GraphQL query using the [Graph Countries](https://github.com/lennertVanSever/graphcountries) API and display some cool data.

Try to explore the full extent of GraphQL's powerful querying capabilities with nested fields, arguments, filters, etc. What data can you get your app to display from one streamlined query?

Some examples using the Countries API could be:

* The total population of a continent/region (and maybe also its subregions)
* Find all the countries that speak a certain language
* Of two countries, which has the shortest path to a third country
* Find out if two countries share a border country
* What countries a timezone runs through, or on the other hand find all the countries in a timezone

Or if you're feeling adventurous, try out a different GraphQL API from [this list](https://github.com/APIs-guru/graphql-apis), the sky is the limit!

## Goals/outcomes

* Understand how data is sent to a GraphQL API and how it differs from REST
* Understand how to insert variables into your queries
* Understand operation names and the structure of the data you receive back from the API

## Stretch goals

* Have multiple UI inputs that change variables in your query
* Make use of query arguments/filters that are available in your chosen API
* Make use of fragments
* Use the Apollo GraphQL client instead of plain fetch for queries (see the different versions of `App.js` and `index.js` in [this folder](https://github.com/sbinlondon/graphql-workshop/tree/main/solution-with-apollo))

### Project presentation:

Your project presentations are meant to be very basic - we want you to really spend the afternoon concentrating on making sure you understand lots about how GraphQL queries work, rather than preparing a smashing presentation. 

For the presentation, we’d really like you to cover these points:

* Give us a demo of your website
* Tell us what went well
* Tell us what could have gone better
* What you would have done if you’d had a bit more time

We’ll keep the presentations to a maximum of 8 minutes for each group - that’s 2 minutes of speaking time per person. Please remember to distribute speaking time equally among each member of the group!

## Project setup

1. Clone this repo
2. Run `npm install`
3. Run `npm start` to open the site
4. Change the files to build out your own app. Don't be afraid to rearrange files/folders as you see fit!
