import { BASE_URL } from './../../constants/index';
import type HttpService from '../http-service';

export default class MainApi {
	constructor(private httpService: HttpService) {}

	getPageData(pageName: string) {
		return this.httpService.get(`${BASE_URL}/${pageName}`);
	}
}
