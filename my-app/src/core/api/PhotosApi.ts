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
}

export default PhotosApi;
