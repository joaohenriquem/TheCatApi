const CatsBreed = require("../models/CatsBreed");
const CatsImage = require("../models/CatsImage");

module.exports = class CatsController {

  static async listBreeds(req, res) {
    CatsBreed.find({}).then(async (list) => {
      const result = list.map((el) => {
        return {
          breed: {
            id: el.breed.id,
            name: el.breed.name,
            origin: el.breed.origin,
            temperament: el.breed.temperament,
            description: el.breed.description,
            image: '../../../../assets/images/cat_default.svg'
          },
        };
      });
      for (var i = 0; i < result.length; i++) {
        const image = (await CatsImage.findOne({ "catImage.breed": result[i].breed.id }).then((img) => {
          return img
        }));
        if (image != null) {
          result[i].breed.image = image.catImage.url
        }
      }
      res.status(200).json({ result });
    });
  }

  static async listInfoByBreeds(req, res) {
    const id = req.params.id;
    CatsBreed.find({}).then((list) => {
      const newArray = list.map((el) => {
        return {
          breed: {
            id: el.breed.id,
            name: el.breed.name,
            description: el.breed.description
          }
        };
      });
      const result = newArray.filter((item) => item.breed.id.includes(id))
      res.status(200).json({ result });
    });
  }

  static async listInfoByTemperament(req, res) {
    const temperament = req.params.temperament;
    CatsBreed.find({}).then((list) => {
      const newArray = list.map((el) => {
        return {
          breed: {
            id: el.breed.id,
            name: el.breed.name,
            description: el.breed.description,
            temperament: el.breed.temperament
          }
        };
      });
      const result = newArray.filter((item) => item.breed.temperament.includes(temperament))
      res.status(200).json({ result });

    });
  }

  static async listInfoByOrigin(req, res) {
    const origin = req.params.origin;
    CatsBreed.find({}).then(async (list) => {
      const newArray = list.map((el) => {
        return {
          breed: {
            id: el.breed.id,
            name: el.breed.name,
            origin: el.breed.origin,
            temperament: el.breed.temperament,
            description: el.breed.description,
            image: ''
          },
        };
      });
      for (var i = 0; i < newArray.length; i++) {
        const image = (await CatsImage.findOne({ "catImage.breed": newArray[i].breed.id }).then((img) => {
          return img
        }));

        if (image != null) {
          newArray[i].breed.image = image.catImage.url
        }
      }
      if (origin == '' || origin == undefined) {
        const result = newArray
        res.status(200).json({ result });
      }
      else {
        const result = newArray.filter((item) => item.breed.origin.toLocaleLowerCase().startsWith(origin))
        res.status(200).json({ result });
      }
    });
  }
}