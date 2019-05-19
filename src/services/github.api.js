import { github } from '../configs';
import axios from 'axios';

const { user, client_id, client_secret, url } = github;

export const getCommits = (repo, callback) => {
  axios
    .get(
      `${url}/repos/${user}/${repo}/commits?client_id=${client_id}&client_secret=${client_secret}`
    )
    .then(callback);
};

export const getRepo = callback => {
  axios
    .get(
      `${url}/users/${user}/repos?client_id=${client_id}&client_secret=${client_secret}`
    )
    .then(callback);
};

export const getUser = callback => {
  axios
    .get(
      `${url}/users/${user}?client_id=${client_id}&client_secret=${client_secret}`
    )
    .then(callback);
};
