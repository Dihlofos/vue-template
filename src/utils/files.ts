/**
 * Функция для получения файла с компьютера пользователя
 *
 * @param {((file: File) => void)} callback Функция, которая вызывается, когда пользователь выбрал файл
 * @param {(string|undefined)} accept Mime-type документов, который можно выбрать
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
