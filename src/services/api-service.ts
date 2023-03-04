import type HttpService from '@/services/http-service';

import MainApi from './api';

interface IApiServiceOptions {
	httpService: HttpService;
}

export default class ApiService {
	readonly mainApi;

	constructor({ httpService }: IApiServiceOptions) {
		this.mainApi = new MainApi(httpService);
	}
}
