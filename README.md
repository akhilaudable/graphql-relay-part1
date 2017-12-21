# graphql-relay-part1

This kit includes an app server, a GraphQL server implementing a tiny example schema, and a transpiler that you can use to get started building an app with Relay. For a walkthrough with a slightly larger schema, and with MySQL database.

#### Please import the file Bookstore.sql. 
``` $ mysql -u root -p Bookstore < path / to / graphql_relay_starter / Bookstore.sql```

## Installation

```
$  path / to / graphql-relay-part1 / npm install
```
## Running

Start a local server:

``` 
$  path / to / graphql-relay-part1 / npm start
```

## Developing

Any changes you make to files in the `js/` directory will cause the server to
automatically rebuild the app and refresh your browser.

If at any time you make changes to `data/schema.js`, stop the server,
regenerate `data/schema.json`, and restart the server:

```
npm run update-schema
npm start
```
1.Open browser [localhost](http://localhost:3000/). Please mind the username and password for MySQL database of your local system.
