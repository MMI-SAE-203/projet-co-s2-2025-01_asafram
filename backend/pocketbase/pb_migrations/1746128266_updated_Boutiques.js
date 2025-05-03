/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2440240353")

  // update collection data
  unmarshal({
    "name": "boutiques"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2440240353")

  // update collection data
  unmarshal({
    "name": "Boutiques"
  }, collection)

  return app.save(collection)
})
