import { itens } from "./itens";
import { posts } from "./posts";
import { users } from "./users";


export function getPosts() {
    return posts;
}

export function getUsers () {
    return users;
}

export function getItens() {
    return itens;
}