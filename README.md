## Description

Ultra Code test

## Setup/Running

```docker
docker build -t ultra-test .
docker run -p 3000:3000 ultra-test
```

## API

`GET` `localhost:3000/games`
Retrieve all game entries
`GET` `localhost:3000/games/<id>/publisher`
Retrieve publisher associated with `<id>` of game
`POST` `localhost:3000/games/create`
Create game via `<id>`
`PUT` `localhost:3000/games/<id>/update`
Update game via `<id>`
`DELETE` `localhost:3000/games/<id>/delete`
Delete game via `<id>`
`GET` `localhost:3000/games/recentSale`
Retrieve games no older than 18 months, with a 20% sale price for games between 18 and 12 months old
``
