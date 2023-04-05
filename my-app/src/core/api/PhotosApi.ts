import { AxiosResponse } from 'axios';
import ManagerAppApi from 'core/rest/RestService';

class PhotosApi {
  static async getPhotos(name: string): Promise<AxiosResponse> {
    const result = await ManagerAppApi.get(`search?query=${name}`);
    return result;
  }
}

export default PhotosApi;
