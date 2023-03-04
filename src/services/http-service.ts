import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

declare module 'axios' {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	export interface AxiosRequestConfig {
		customErrorHandling?: boolean;
	}
}

export const enum HttpServiceStatusCode {
	NotValidSession = '50440',
	NotAuthorized = '50401',
	NotAuthenticated = 'NotAuthenticated',
	Unauthorized = 'Unauthorized',
}

export const enum HttpServiceMethod {
	Post = 'post',
	Get = 'get',
}

export interface IHttpServiceFileResponse {
	blob: Blob;
	name: string;
}

export interface IHttpServiceOptions {
	appId: string;
}

export const HEADERS = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	'X-Requested-With': 'XMLHttpRequest',
	'Access-Control-Allow-Origin': '*',
};

export const DEFAULT_ERROR = 'Не удалось выполнить запрос, попробуйте ещё раз';
export const REQUEST_TIMEOUT = 60000;

export default class HttpService {
	private instance: AxiosInstance;

	constructor() {
		this.instance = axios.create({ headers: HEADERS, timeout: REQUEST_TIMEOUT });
	}

	configureInterceptors(): void {
		this.instance.interceptors.request.use(
			config => {
				const method = config.method?.toLowerCase();

				if (method === HttpServiceMethod.Post) {
					if (config.data instanceof FormData) {
						config.headers = {
							...config.headers,
							'Content-Type': 'multipart/form-data',
						};
						return config;
					}
				}

				return Promise.resolve(config);
			},
			error => Promise.reject(error.response),
		);

		this.instance.interceptors.response.use(
			response => {
				if (response.headers['content-type'].includes('application/json')) {
					if (response.data.success && response.data.data) {
						return Promise.resolve(response.data.data);
					}

					return Promise.reject(response.data.details ? response.data.details : DEFAULT_ERROR);
				}

				const nameMatches = /filename[^;=\n]*=(utf-8(['"]*))?(.*)/.exec(
					response.headers['content-disposition'],
				);

				return Promise.resolve({
					blob: new Blob([response.data], { type: response.headers['content-type'] }),
					name:
						nameMatches != null && nameMatches[3]
							? decodeURIComponent(nameMatches[3].replace(/['"]/g, ''))
							: '',
				});
			},
			error => {
				if (!error.config.customErrorHandling) {
					// TODO добавить нотификации.
				}
				return Promise.reject(error.response);
			},
		);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get(url: string, config?: AxiosRequestConfig): Promise<any> {
		return this.instance.get(url, config);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	post(url: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
		return this.instance.post(url, data, config);
	}
}
