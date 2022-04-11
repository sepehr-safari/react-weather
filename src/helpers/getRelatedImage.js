import { UNSPLASH_SOURCE_URL } from './constants';

const getRelatedImage = async (description) => {
  const fetchedImage = await fetch(`${UNSPLASH_SOURCE_URL}${description}`);

  const image = fetchedImage.url;

  return image;
};

export default getRelatedImage;
