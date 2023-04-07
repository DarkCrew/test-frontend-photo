import { AxiosResponse } from 'axios';
import ManagerAppApi from 'core/rest/RestService';

class PhotosApi {
  static async getPhotos(
    name: string,
    orientation?: string,
    size?: string
  ): Promise<AxiosResponse> {
    const result = await ManagerAppApi.get(
      `search?query=${name}&orientation=${orientation}&size=${size}`
    );
    return result;
  }

  static async getNextPagePhotos(url: string): Promise<AxiosResponse> {
    const result = await ManagerAppApi.get(url);
    return result;
  }

  static async getCuratedPhotos(url: string): Promise<AxiosResponse> {
    const newUrl = url.slice(url.search('curated'), url.length);
    const result = await ManagerAppApi.get(newUrl);
    return result;
  }
}

export default PhotosApi;
