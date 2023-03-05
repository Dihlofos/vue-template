/**
 * Function added files from computed
 *
 * @param {((file: File) => void)} callback Callback calls after user chose a file
 * @param {(string|undefined)} accept Mime-type allows to
 * @returns {void}
 */
export const getFileFromComputer = (callback: (file: File) => void, accept?: string): void => {
	const input = document.createElement('input');
	input.style.display = 'none';
	input.type = 'file';

	if (accept) {
		input.accept = accept;
	}

	const onInputChange = () => {
		const file = input.files ? input.files[0] : null;

		if (file) {
			callback(file);
		}

		input.removeEventListener('change', onInputChange);
		input.remove();
	};

	input.addEventListener('change', onInputChange);
	input.click();
};

/**
 * Function for download file fron Blob or link
 *
 * @param {(Blob|string)} value Link to the file or Blob
 * @param {(string|undefined)} filename
 * @returns {void}
 */
export const saveFile = (value: Blob | string, filename?: string): void => {
	const url = typeof value === 'string' ? value : window.URL.createObjectURL(value);

	const a = document.createElement('a');
	document.body.appendChild(a);
	a.href = url;
	if (filename) {
		a.download = filename;
	}
	a.click();

	setTimeout(() => {
		window.URL.revokeObjectURL(url);
		document.body.removeChild(a);
	}, 0);
};
