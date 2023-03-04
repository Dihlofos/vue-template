import { defineStore } from 'pinia';

interface IMainState {
	pageData: Record<string, string> | null; // Landing types here.
	pageName: string;
	loading: boolean;
}

const useMainPageStore = defineStore({
	id: 'main',

	state: (): IMainState => ({
		pageData: null,
		pageName: 'snowmoscow',
		loading: false,
	}),

	actions: {
		async fetchLandingData() {
			try {
				this.loading = true;
				this.pageData = await this.apiService.mainApi.getPageData(this.pageName);
			} catch (e: unknown) {
				console.error('pageData loading error', e);
			} finally {
				this.loading = false;
			}
		},
	},
});

export default useMainPageStore;
