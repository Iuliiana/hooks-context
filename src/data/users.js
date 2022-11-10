import {getData} from "../functions/fetch";

const usersListUrl = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';
const usersDetailUrl = (userId) => `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${userId}.json`;


export const getUsersList = () => getData(usersListUrl);
export const getUserDetail = (userId) => getData(usersDetailUrl(userId));
