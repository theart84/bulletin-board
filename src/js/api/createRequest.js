export const createRequest = async () => {
  const URL = 'https://6075786f0baf7c0017fa64ce.mockapi.io/products';
  const request = await fetch(URL);
  return request.json();
};

const createRequestIMG = async () => {
  const URL =
    'https://api.unsplash.com/photos?client_id=R90ZpgVQc2yOCzzDh9E1yELEPKUIxkXe9W8rXCHp4NE&page=1&per_page=30';
  const request = await fetch(URL);
  const response = await request.json();
  return response.map((image) => image.urls.regular);
};

export const imgURL = [];
createRequestIMG().then((imgArray) => imgURL.push(...imgArray));
