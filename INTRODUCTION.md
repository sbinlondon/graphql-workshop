# GraphQL workshop introduction

## REST API

You're familiar with REST architecture.

Let's query [Rest Countries](https://restcountries.eu/)

``` 
https://restcountries.eu/rest/v2/name/:name
```

The `/name` endpoint will give us info about the country we pass as `:name`. So let's [try one](https://restcountries.eu/rest/v2/name/Germany).

``` 
https://restcountries.eu/rest/v2/name/Germany
```
Here's what we get back:

```
[
  {
    "name": "Germany",
    "topLevelDomain": [
      ".de"
    ],
    "alpha2Code": "DE",
    "alpha3Code": "DEU",
    "callingCodes": [
      "49"
    ],
    "capital": "Berlin",
    "altSpellings": [
      "DE",
      "Federal Republic of Germany",
      "Bundesrepublik Deutschland"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 81770900,
    "latlng": [
      51.0,
      9.0
    ],
    "demonym": "German",
    "area": 357114.0,
    "gini": 28.3,
    "timezones": [
      "UTC+01:00"
    ],
    "borders": [
      "AUT",
      "BEL",
      "CZE",
      "DNK",
      "FRA",
      "LUX",
      "NLD",
      "POL",
      "CHE"
    ],
    "nativeName": "Deutschland",
    "numericCode": "276",
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "de",
        "iso639_2": "deu",
        "name": "German",
        "nativeName": "Deutsch"
      }
    ],
    "translations": {
      "de": "Deutschland",
      "es": "Alemania",
      "fr": "Allemagne",
      "ja": "ドイツ",
      "it": "Germania",
      "br": "Alemanha",
      "pt": "Alemanha",
      "nl": "Duitsland",
      "hr": "Njemačka",
      "fa": "آلمان"
    },
    "flag": "https://restcountries.eu/data/deu.svg",
    "regionalBlocs": [
      {
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }
    ],
    "cioc": "GER"
  }
]
```

That's a lot of info! We get info about the capital city, languages spoken, a flag emoji, area, population, countries it borders, how to say Germany in German, etc.

Imagine the project we're building is to tell you what a country's name is in its native language, and tell you the languages spoken there.

We'd take this object of info about Germany, do some filtering, and end up with `nativeName` and `languages`. All good.

Imagine we want to do that with [all 250 countries](https://restcountries.eu/rest/v2/all).

```
https://restcountries.eu/rest/v2/all
```

The `all` endpoint is going to give us back all info about every country on the API - 250 of them. That's a lot of data (about 257 kb, vs 966 B for one country).

Imagine you were dealing with an API and asking for data about much more than 250 items.

## Now with GraphQL!

Enter GraphQL: 

[Graph Countries](https://github.com/lennertVanSever/graphcountries) is a GraphQL API built on top of Rest Countries.

GraphQL allows us to ask only for the data fields that we want to use in our app.

So if we want to only get info about the native name and languages of Germany (or every country), and nothing else, we could do that.

## Wait, but why?

GraphQL is often called a "query language" for APIs. In the way that SQL is a query language that allows you to query and manipulate data in a database, GraphQL can allow you to query and manipulate data in an API. But more than that, it has strong opinions (a.k.a. is strongly typed) on the data you send and receive from it - the fields it contains, whether they're nullable or not, what those fields can contain (numbers, strings, arrays, objects), and more.

It was developed internally at Facebook since 2012, released publically in 2015, and as of 2018 is no longer at Facebook but looked after by the GraphQL Foundation (an arm of the non-profit Linux Foundation).

It allows the client making the request to define the structure of the data required, and the same structure of the data is returned from the server, preventing too much data from being returned (and improving performance). It also usually means you can get all the data you need in one query rather than fetching from multiple endpoints, like you might have to do with REST APIs.

This comes at a cost though - GraphQL can be intensive to set up, and there are definitely cases when you wouldn't want to use it.


### Lightning exercise (10-15 mins)

So back to querying with GraphQL.

You query a GraphQL API in a different way to a REST API. Instead of `GET`, you'll `POST`, and tell the API what data it is you want to get back.

Let's try it in the [GraphQL playground](https://countries-274616.ew.r.appspot.com/?query=query%20{%0A%20%20Country%20{%0A%20%20%20%20name%0A%20%20%20%20nativeName%0A%20%20%20%20}%0A}%0A).

Look and click around and think about:

* The Docs and Schema tab on the righthand side. This tells you the structure that you need to follow when querying the GraphQL API. (People like to claim that GraphQL is 'self-documenting' because of these tabs. This is a lie. But it does make things easier to find once you know your way around.)
* Try altering the query to the following. Does it work? Why not?

```
query {
  Country(name: "Germany") {
    name
    nativeName
    officialLanguages
  }
}
```

* Why might something have an ellipse next to it? i.e. `Country(...)` or a field i.e. `borders(...): [Country]`

Now your turn: pick another random country and get a random fact for us about it!

## Bonus queries:

Some sample queries to play around with.

* Plain query: 

```
```

* Query with variable:

```
```

* Query with multiple variables: 

```
```

* Query with fragments: 

```
```

* Query with filters: 

```
```

* Query with fragments and filters: 

```
```

* Multiple queries in one with fragments: 

```
```

* Multiple queries in one with variables in fragments: 

```
```
