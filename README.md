# FAC20 GraphQL Workshop
*Wednesday, 11th November 2020*

## *Schedule*:

| **Time** | **Task** |
| -------- | -------- |
|   10am - 10.30am   | <ul><li>Introduction from Kate and Georgia</li><li>Outline learning outcomes and schedule for the day</li><li>[Short demo of how GraphQL works](https://github.com/sbinlondon/graphql-workshop/blob/main/INTRODUCTION.md)</li></ul> |
| 10.30am - 11.00 am | Read key resources, then quick discussion/questions as a group |
|   10.30am - 12.15pm   | Read more in-depth resources and prepare a presentation in your groups |
|  12.15pm - 1pm   | Presentations to cohort |
|  1pm - 2pm   | Break for lunch|
|  2pm - 2.10pm   | Prepare for afternoon projects|
|   2.10pm - 5pm  | <ul><li>Working on projects + presentations</li><li>Working on stretch goals if finished early</li></ul>|
|   5pm - 6pm  | Show projects to cohort and give quick presentation on how they went |

## *Learning outcomes*:

- [ ] We can make a GraphQL request from our frontend and receive a response
- [ ] We can handle and display GraphQL errors properly
- [ ] We can pass variables into our GraphQL queries
- [ ] We have an understanding of what makes GraphQL different from REST and know its pros and cons

## *Groups for the day*:

We have separated you into groups of 4, and you’ll be in the same group for the whole day. We’ve named each group after the research topic you’ll be doing your morning presentation on.

| Query Crusaders | Mutation Monsters | Type Troubadors | Resolver Rapscallions |
| -------- | -------- | -------- | -------- |
|Amber |Terry | Khadija| Shaya |
| Ephie |Jen | Rihards| Josh |
|Terrence | My Hoa|Azizi | Trish |
| Aishah|Jihyun |Jess | Lisa |

## *Research morning*:

We’d like you to spend the morning engaging with the resources in the list below. We’ve separated the reading into a list of key resources and additional resources. Every group should make an effort to read all of the key resources, but of the additional resources, it’s only necessary that you read about the subject you’ll be giving your presentation on. If you have time to read the other additional resources that’s great, but we’d rather you focus your energy on the key resources and your group’s topic first.

You’ll also notice that for almost every subject, there is a reading and video resource available. We have tried to make sure each resource covers the same information so that you may choose which resource you want to use. You can use both, but do not feel that you have to, and there’s probably not enough time to get through them all this morning. Remember, you can always come back to them at a later date. (And if you find resources you think fit better, please let us know so we can add them!)

Everyone should read the key resources, and understand queries and mutations - everything else stems from here! We'll read these for about 20-25 mins in your breakout rooms. Chat with each other while you read to make sure everyone is on the same page, and then have a quick chat in the main room and ask a few questions.

### Key resources

| Subject | Reading resource | Video resource |
|-----|-----|-----|
| Introduction to GraphQL | https://moonhighway.com/graphql-query-language|, https://moonhighway.com/what-is-the-graphql-spec | https://www.howtographql.com/basics/0-introduction/ |
| Comparing GraphQL to Restful | https://medium.com/@back4apps/graphql-vs-rest-62a3d6c2021d | https://www.howtographql.com/basics/1-graphql-is-the-better-rest/ |
| Mutations | https://moonhighway.com/understanding-graphql-mutations | https://www.howtographql.com/basics/2-core-concepts/ |
| Queries | https://alligator.io/graphql/introduction-graphql-queries/| https://www.youtube.com/watch?v=mE1Jgvn4k1g |

### Topics and additional resources

| Subject | Reading resource | Video resource |
| ----- | ----- | ----- |
| Query arguments | https://moonhighway.com/query-arguments, https://www.digitalocean.com/community/tutorials/understanding-queries-in-graphql, https://blog.logrocket.com/graphql-queries-in-simple-terms/ | |
| Fragment | https://moonhighway.com/graphql-fragments, https://www.digitalocean.com/community/tutorials/understanding-queries-in-graphql, https://blog.logrocket.com/graphql-queries-in-simple-terms/ | https://www.youtube.com/watch?v=AAHR7eBKLU8 | |
| Variables | https://www.digitalocean.com/community/tutorials/understanding-queries-in-graphql, https://blog.logrocket.com/graphql-queries-in-simple-terms/ | |
| Schema | https://moonhighway.com/schema-definition-language, https://moonhighway.com/schema-definition-language | https://www.howtographql.com/basics/2-core-concepts/ |
| Introspection queries | https://moonhighway.com/five-introspection-queries | |
| Fetching data | https://moonhighway.com/fetching-data-from-a-graphql-api | https://www.howtographql.com/basics/2-core-concepts/ |
| Clients | https://graphql.org/graphql-js/graphql-clients/, https://moonhighway.com/quick-intro-to-apollo-client | |
| Custom scalars/types | https://moonhighway.com/creating-custom-scalars | |
| Resolvers | https://moonhighway.com/the-parent-argument | |
| When not to use GraphQL | https://blog.logrocket.com/5-reasons-you-shouldnt-be-using-graphql-61c7846e7ed3/ | |

Then for each group, study these more specific resources and prepare presentations based on the questions your group has.

#### Query Crusaders

* What are arguments, filters, and directives when talking about GraphQL queries?
* How do we use fragments in queries? Why would we?
* What is an operation name and how/why would we use it?
* Show some examples of queries using these things so we can see correct syntax

#### Mutation Monsters

* What are mutation arguments (like function arguments)? Can we use variables as arguments?
* How can we tell if an argument is necessary or optional for a mutation?
* What is an 'input' in relation to mutations? What are best practices with these?
* Show some examples of mutations using these things so we can see correct syntax
* Do mutations always return the same fields as in the query? If not, how/when/why would we return different fields?

#### Type Troubadors

* What are types, and why do they matter?
* What kinds of types are there? 
* Can you make custom types?
* What does strongly-typed mean? Is JavaScript strongly typed?
* What is the schema?

#### Request Rapscallions

* How do we make requests in Node/React to a GraphQL API?
* What is the role of caching in GraphQL and why is it important?
* How can we use the GraphiQL/GraphQL Playground to test out queries?
* What is a GraphQL client? What are some examples? Why would we use one?

### Research topic presentation

You should aim to start working on your presentations around 12:00pm. We will meet in the main room for presentations at 12.30pm. You'll have 6 minutes for your presentation, and everyone should speak for an equal amount of time, so about 90 seconds per teammate.

Your research presentation can include any information you’ve picked up during your morning research, but should focus on your specific research subject. 

We’d like you to tell us the following about your research subject:
* Explain what your topic is
* Tell us how you can use it/why it is important in GraphQL
* Include a bibliography listing the resources you used

Additionally, it would be great if you could:
* Include a demo (either live or pre recorded) of how to use it 
* Branch out and find your online resources about your subject, and include them in your bibliography 

## *Afternoon project:*

Now we're going to build a small app making use of a GraphQL API.

See the instructions [here](https://github.com/sbinlondon/graphql-workshop/blob/main/PROJECT.md).

### Project presentation

Your project presentations are meant to be very basic - we want you to really spend the afternoon concentrating on making your GraphQL queries work, rather than preparing a smashing presentation. 

For the presentation, we’d really like you to cover these points:
* Give us a demo of your website
* Tell us what went well
* Tell us what could have gone better
* What might you have done with a bit more time?

We’ll keep the presentations to a maximum of 8 minutes for each group - that’s 2 minutes of speaking time per person. Please remember to distribute speaking time equally among each member of the group!

## *Final note:*

Thank you so much for inviting us into your classroom for the day and letting us ramble on about GraphQL! 

This is the first time we’ve run this workshop, so we’d love to get your feedback on how you felt it went so that we can improve it for future FAC cohorts. There’s a link to a google form [here](https://forms.gle/7WYA165tykc1jE7w8), with three simple questions to answer. It shouldn’t take you more than five minutes!

Also, if you enjoyed GraphQL and want to know more, Eve Porcello from Moon Highway runs monthly free webinars to get you started. The next one is on **Saturday, December 1 at 5:00 PM GMT**. https://moonhighway.com/graphql/everyone/

Thanks!

Kate and Georgia

### Bonus resources

* GraphQL APIs to browse and use: https://github.com/APIs-guru/graphql-apis
* The GraphQL spec if you want to nerd out: https://github.com/graphql/graphql-spec
* If you want to try building your own GraphQL API: https://moonhighway.com/building-a-graphql-server-in-five-minutes
* Great article going over what we've learnt in ten snappy images https://dev.to/methodcoder/graphql-crash-course-in-10-pics-3b04
