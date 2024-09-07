# API Routes

## Villager Routes

### Get all villagers

`GET /api/villagers`

``` json
{
  "villagers":
  [
      {
        'id': 1,
        "name":"alex",
        "birthday": "Spring 1",
        "sex":"male",
        "marriage": true,
        "home": "1 River Road",
        "schedule":{},
        "gifts":{}
      },
  ]
}
```

## Get a villager by id

`GET /api/villagers/:id`

``` json
{
  'id': 1,
  "name":"alex",
  "birthday": "Spring 1",
  "sex":"male",
  "marriage": true,
  "home": "1 River Road",
  "schedule":{},
  "gifts":{}
}
```

## Gift routes

### Get all gifts

`GET /api/gifts`

``` json
{
  "gifts": {
    id: 1,
    "name": "amethyst",
    "availability": "year-round",
    "location": "mines",
    "Preference": [
      {
        "love": ["caroline"],
        "like": ["abigail"],
        "neutral": ["dwarf"],
        "dislikes":["alex"],
        "hates":["haley"]
      }
    ],
  }
}
```

### Get a gift by id

`GET /api/gifts/:id`

``` json
{
  id: 1,
  "name": "amethyst",
  "availability": "year-round",
  "location": "mines",
  "Preference": [
    {
      "love": ["caroline"],
      "like": ["abigail"],
      "neutral": ["dwarf"],
      "dislikes":["alex"],
      "hates":["haley"]
    }
  ],
}
```

## Preference routes

### Get all preferences (love, like, neutral, dislikes, hates)

`GET /api/preferences`

``` json
{
  "preferences":
  [
    {"id":1,"name":"love"},
    {"id":2,"name":"like"},
    {"id":3,"name":"neutral"},
    {"id":4,"name":"dislikes"},
    {"id":5,"name":"hates"}
  ]
}
```

### Get a preference by id

`GET /api/preferences/:id`

``` json
{
  id:1,
  name: "love",
}

```

## Building routes

## Category routes

## location routes

## Season routes

## Search bar routes

### Search for a villager by name

`GET /api/villagers/:search`

``` json
{
  'id': 1,
  "name":"alex",
  "birthday": "Spring 1",
  "sex":"male",
  "marriage": true,
  "home": "1 River Road",
  "schedule":{},
  "gifts":{}
}
```
