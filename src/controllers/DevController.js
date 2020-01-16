import axios from 'axios';

import Dev from '../models/Dev.js'
import parseStringAsArray from '../utils/parseStringAsArray.js'

/** Máximo 5 funções: 
 * index: Mostrar uma lista
 * show: Mostrar somente um
 * store: Criar
 * update: Alterar
 * destroy: Deletar
*/

const show = async (req, res) => {

  return res.find

}

const store = async (req, res) => {
  const { github_username, techs, latitude, longitude } = req.body;

  let dev = await Dev.findOne({ github_username });

  if (dev) return res.status(400).json({ "warning": "User existent" });

  const response = await axios.get(`https://api.github.com/users/${github_username}`);

  const { avatar_url, name = login, bio } = response.data

  const techsArray = parseStringAsArray(techs)

  const location = {
    type: "Point",
    coordinates: [longitude, latitude]
  }

  dev = await Dev.create({
    name,
    avatar_url,
    bio,
    location,
    github_username,
    techs: techsArray
  });

  return res.json(dev);
};

const index = async (req, res) => {
  const devs = await Dev.find()
  res.json(devs)
};

// Atualizar apenas a bio, nome, avatar, localização e tecnologias
const update = () => {

};

const destroy = () => {

};

export default {
  store,
  index,
  update,
  destroy
};