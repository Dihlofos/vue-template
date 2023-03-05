import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

declare module 'axios' {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	export interface AxiosRequestConfig {
		customErrorHandling?: boolean;
	}
}

export const HEADERS = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	'X-Requested-With': 'XMLHttpRequest',
	'Access-Control-Allow-Origin': '*',
};

export const REQUEST_TIMEOUT = 60000;

export default class HttpService {
	private instance: AxiosInstance;

	constructor() {
		this.instance = axios.create({ headers: HEADERS, timeout: REQUEST_TIMEOUT });
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
