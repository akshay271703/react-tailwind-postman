const reqMap = {
  200: {
    description: 'OK',
    class: 'text-green-500 font-bold',
  },
  201: {
    description: 'OK',
    class: 'text-green-500 font-bold',
  },
  400: {
    description: 'Bad Request',
    class: 'text-red-500 font-bold',
  },
  401: {
    description: 'Unauthorized',
    class: 'text-red-500 font-bold',
  },

  403: {
    description: 'Forbidden',
    class: 'text-red-500 font-bold',
  },
  404: {
    description: 'Not Found',
    class: 'text-red-500 font-bold',
  },
  500: {
    description: 'Internal Server Error',
    class: 'text-orange-500 font-bold',
  },
};

export default reqMap;
