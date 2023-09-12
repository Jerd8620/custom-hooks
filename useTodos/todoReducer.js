// { type: [todo remove], payload: id }

export const todoReducer = (initialState = [], action) => {


  switch (action.type) {
    case'[TODO] Add Todo':
      return [...initialState, action.payload]
    
    case '[TODO] Remove Todo':
      return initialState.filter(todo => todo.id !== action.payload);
    
    case '[TODO] Toggle Todo':
      return initialState.map(todo => { 

        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        }

        return todo;
      })
  
    default:
      return initialState;
  }


}


// Este archivo se creo con .js porque no es una funcion que no regresara un archivo .jsx, siendo que es una funcion pura de JavaScript, en principio se pone un export porque necesita usarse fuera y se usara el const todoReducer que sera igual ( ) a una funcion de flecha se abren y cierran llaves {} y dentro de los parentesis se recibira el initialState y el action, hay que recordar que siempre debemos regresar un estado, usualmente se trabaja con un switch y en el primer parentesis se escribe (action.type) en la accion que es el case que aun no existe pondremos 'ABC', quitamos el break y escribimos un return que deberia regresar como el initialState, debemos tener conciencia que al dejarlo asi podra dar una falsa impresion de que esta funcionando o no lo esta, en el segundo break que esta debajo del dafault pondremos un return, tambien en el todoReducer se puede colocar un  = a un arreglo vacio [ ] se guardan los cambios debemos checar si esta exportado ya que si no lo esta no se podra utilizar este archivo. 