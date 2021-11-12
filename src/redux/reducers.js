import { createStore, combineReducers } from 'redux'

// Créer une fonction de reducer, qui a comme arguments le l'ancien state et l'action avec son type.
// Cette fonction a comme role de faire les modifications necessaire sur le state à partir le type d'action qu'elle recoit
// A chaque appelle de dispatch depuis n'importe quel endroit, le redux fait appelle avec l'action dispatchée vers tous les reducers,

const countReducer = (state = 0, action) => {
    console.log("Reducer 0", action, state);
    if(action.type === 'increment'){
        return state + action.step;
    }else if(action.type === 'decrement'){
        return state - action.step;
    }
    return state;
}


// Chaque reducer est responsable d'un ensemble de données qui s'appelle state
// Et a chaque fois le redux envoie un des actions, il utilise le state(n-1) et l'action.
// Afin de faire le changement du next state, on teste si l'action == le vrai nom qu'on cherche, 
const userReducer = (state = "", action) => {
    console.log("Reducer 1", action, state);
    // Afin de changer le nom de l'utilisateur, on check si l'action envoyé est set_username, si c'est le cas
    // On return le nouveau state, qui est un param de l'objet action
    if(action.type == 'set_username'){
        return action.username;
    }
    return state;
}


// Combiner plusieurs reducers
let reducers = combineReducers({
    utilisateur: userReducer,
    conteur: countReducer
})


// Créer le store qui serra utilisé par la suite dans l'app principale
let store = createStore(reducers);

export {
    store
}