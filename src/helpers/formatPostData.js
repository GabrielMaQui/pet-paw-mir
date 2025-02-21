// Mapeo de opciones del frontend a los enums de Prisma
const petTypeMap = {
  'Perro': 'DOG',
  'Gato': 'CAT',
  'Pájaro': 'BIRD',
  'Conejo': 'RABBIT',
  'Otro': 'OTHER',
};

const stateMap = {
  'Perdido': 'LOST',
  'Encontrado': 'FOUND',
  'En Adopción': 'ADOPTION',
  'Adoptado': 'ADOPTED',
};

/*
const petAgeMap = {
  'Cachorro': 'PUPPY',
  'Joven': 'YOUNG',
  'Adulto': 'ADULT',
  'Anciano': 'SENIOR',
};

const petSizeMap = {
  'Pequeño': 'SMALL',
  'Mediano': 'MEDIUM',
  'Grande': 'LARGE',
};

const petGender = {
  'Macho' : 'MALE',
  'Hembra' : 'FEMALE'
}*/

function getPetTypeKeyByValue(value) {
  return Object.keys(petTypeMap).find(key => petTypeMap[key] === value) || 'mascota';
}

// Función para transformar los datos del frontend al formato de Prisma
export function formatPostData(postData) {
  const { state, tags, petData, sightingData, ...rest } = postData;

  // Verificación de datos
  const hasNullValues = Object.values(postData).some((value) => {
    if (value === '') return true;
    if (typeof value === 'object' && value !== '') {
      return Object.values(value).some((subValue) => subValue === ''); // Subpropiedad es null
    }
    return false;
  });

  if (hasNullValues) {
    return false;
  }

  const updatedState = stateMap[petData.state];

  const title =
    updatedState === 'LOST'
      ? `Se busca ${petData.name} mi ${getPetTypeKeyByValue(petData.type)}`
      : state === 'ADOPTION'
      ? `Se adopta ${petData.name} mi ${getPetTypeKeyByValue(petData.type)}`
      : '';

  const formattedTags = Array.isArray(tags) ? tags.join(', ') : '';
  console.log(updatedState);
  const idUsuario = JSON.parse(localStorage.getItem('user'));

  return {
    ...rest,
    title: title,
    tags: formattedTags,
    state: updatedState,
    userId: idUsuario.id,
    petData: {
      ...petData,
      state: updatedState,
    },
    sightingData: {
      ...sightingData,
    },
  };
}


export const formatData = (user) => {
  let id = user ? user.id : 0;
  let data = {
    title: 'default',
    description: '',
    tags: '',
    location: '',
    state: 'LOST',
    userId: id,
    petData: {
      name: ' ',
      petType: '',
      gender: '',
      age: '',
      size: '',
      state: '',
      imageUrl: '',
      validated: true
    },
    sightingData: {
        latitude: 0,
        longitude: 0
    }
  }
  return data;
};
