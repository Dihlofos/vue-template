import { inject } from 'vue';

import HttpService from '@/services/http-service';
import ApiService from './api-service';

export const createServices = () => {
	const httpService = new HttpService();
	const apiService = new ApiService({ httpService });

	return {
		httpService,
		apiService,
	};
};

export const useApiService = () => inject('apiService') as ApiService;
