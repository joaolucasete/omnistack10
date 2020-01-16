
import Dev from '../models/Dev.js';
import parseStringAsArray from '../utils/parseStringAsArray.js'

const index = async (req, res) => {
  // Buscar todos devs num raio de 10km
  // Filtrar por tecnologias

  const { latitude, longitude, techs } = req.query;

  const techsArray = parseStringAsArray(techs);

  const devs = await Dev.find({
    techs: {
      $in: techsArray,
    },
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [longitude, latitude],
        },
        $maxDistance: 10000, // Em metros = 10km
      },
    }
  });

  return res.json({ devs });
};

export default {
  index
};