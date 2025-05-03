/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // update collection data
  unmarshal({
    "name": "recettes"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // update collection data
  unmarshal({
    "name": "Recettes"
  }, collection)

  return app.save(collection)
})
