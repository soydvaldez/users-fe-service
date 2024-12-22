

// Clases personalizadas para gestionar errores
class ServerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ServerError';
  }
}

class ClientError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ClientError';
  }
}

class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

//Peticion a un servidor por HTTPS
async function solicitarUsuarios(): Promise<Response> {
  try {
    return fetch('https://jsonplaceholder.typicode.com/users');
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('Network error or fetch failure:', error.message);
      throw new NetworkError(error.message);
    }
    throw error;
  }
}
//Funcion principal
async function main(): Promise<User[]> {
  const response: Response = await solicitarUsuarios(); //Esperamos a que se resuelva la primera promesa:

  // Validamos el estatus de la respuesta e invertimos el if para gestionar errores:
  if (!response.ok) {
    const statusHttp = response.status;
    const errorMessage = await response.text();

    //Maneja de errores del cliente:
    if (statusHttp >= 400) {
      throw new ClientError(errorMessage);
    }

    //Maneja de errores del servidor:
    if (statusHttp >= 500) {
      throw new ServerError(errorMessage);
    }
  }

  // Respuesta esperada: statusHttp 200
  // Esperamos a que se resuelva la segunda promesa y convertimos el cuerpo de la peticion en un JSON
  return await response.json();
}

// Punto de procesamiento para la promesa:
main()
  .then((users: User[]) => {
    console.log(users);
  })
  .catch((err) => {
    // Centralizacion de errores:
    if (err instanceof NetworkError) {
      console.error('Network error:', err.message);
    }

    if (err instanceof ClientError) {
      console.error('Client error:', err.message);
    }

    if (err instanceof ServerError) {
      console.error('Server error:', err.message);
    }

    console.error('Unexpected error:', err);
  });

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
