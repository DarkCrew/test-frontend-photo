import { AxiosResponse } from 'axios';
import ManagerAppApi from 'core/rest/RestService';

import { PhotoItem } from './Models';

class PhotosApi {
  static async getPhotos(name: string): Promise<AxiosResponse> {
    const result = await ManagerAppApi.get(`search?query=${name}`);
    return result;
  }
}

export default PhotosApi;
