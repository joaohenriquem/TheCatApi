const CatsBreed = require("../models/CatsBreed");
const CatsCategories = require("../models/CatsCategories");
const CatsImage = require("../models/CatsImage");

const axios = require('axios').default;

module.exports = class SetupController {

  static async loadSetup(req, res) {

      //Carga das categorias das raças
      try {
        axios.get(process.env.URL_THE_CAT_API + 'v1/categories', { headers: { 'x-api-key': process.env.TOKEN_THE_CAT_API } })
          .then(function (response) {
            response.data.forEach(function (category, i) {
              const catsCategories = new CatsCategories({
                categories: {
                  id: category.id,
                  name: category.name
                }
              });
              const categry = CatsCategories.findById(category.id)

              if (!categry) {
                catsCategoriessave();

              })
            console.log("Upload cat categories successful!")
          })
          .catch(function (error) {
            console.log(error);
          })
      } catch (error) {
        console.log(`Error=> ${error}`);
      }

    //Carga das raças
    try {
      axios.get(process.env.URL_THE_CAT_API + 'v1/breeds', { headers: { 'x-api-key': process.env.TOKEN_THE_CAT_API } })
        .then(function (response) {
          response.data.forEach(function (breed, i) {
            const catsBreed = new CatsBreed({
              breed: {
                id: breed.id,
                name: breed.name,
                origin: breed.origin,
                temperament: breed.temperament,
                description: breed.description
              }
            });

            const cat = CatsBreed.findById(breed.id)

            if (!cat)
              catsBreed.save()

            setTimeout(() => {
              try {
                axios.get(`${process.env.URL_THE_CAT_API}v1/images/search?limit=3&size=small&page=0&breed_ids=${breed.id}`, { headers: { 'x-api-key': process.env.TOKEN_THE_CAT_API } })
                  .then(function (response) {
                    response.data.forEach(function (image, i) {
                      const catsImages = new CatsImage({
                        catImage: {
                          breed: breed.id,
                          categories: 1,
                          id: image.id,
                          url: image.url,
                          width: image.width,
                          height: image.height
                        }
                      });
                      catsImages.save();
                      console.log("Upload images by breed successful.")
                    });
                  });
              } catch (error) {
                console.log(`Error=> ${error}`);
              }
            }, 1000);

            //Carga das imagens com chapeu
            setTimeout(() => {
              try {
                axios.get(`${process.env.URL_THE_CAT_API}v1/images/search?limit=3&order=Random&size=small&page=0&category_ids=1&breed_ids=${breed.id}`, { headers: { 'x-api-key': process.env.TOKEN_THE_CAT_API } })
                  .then(function (response) {
                    response.data.forEach(function (image, i) {
                      const catsImages = new CatsImage({
                        catImage: {
                          breed: breed.id,
                          categories: 1,
                          id: image.id,
                          url: image.url,
                          width: image.width,
                          height: image.height
                        }
                      });
                      catsImages.save();
                      console.log("Upload images with hat successful.")
                    });
                  });
              } catch (error) {
                console.log(`Error=> ${error}`);
              }
            }, 1000);

               //Carga das imagens com oculos de sol
             setTimeout(() => {
              try {
                axios.get(`${process.env.URL_THE_CAT_API}v1/images/search?limit=3&order=Random&size=small&page=0&category_ids=4&breed_ids=${breed.id}`, { headers: { 'x-api-key': process.env.TOKEN_THE_CAT_API } })
                  .then(function (response) {
                    response.data.forEach(function (image, i) {
                      const catsImages = new CatsImage({
                        catImage: {
                          breed: breed.id,
                          categories: 1,
                          id: image.id,
                          url: image.url,
                          width: image.width,
                          height: image.height
                        }
                      });
                      catsImages.save();
                      console.log("Upload images with sunglasses successful.")
                    });
                  });
              } catch (error) {
                console.log(`Error=> ${error}`);
              }
            }, 1000);

          })
          console.log("Upload cat breeds successful!")
        })
        .catch(function (error) {
          console.log(error);
        })

    } catch (error) {
      console.log(`Error=> ${error}`);
    }

    res
      .status(201)
      .json({ message: "Setup successful!" });
  }

};
