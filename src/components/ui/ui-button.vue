<script setup lang="ts">
import { computed } from 'vue';

export interface IUiButtonProps {
	class?: string;
	type?: 'button' | 'submit' | 'reset';
	theme?: 'primary' | 'transparent';
}

const props = withDefaults(defineProps<IUiButtonProps>(), {
	type: 'button',
	theme: 'primary',
	class: '',
});

const emit = defineEmits(['click']);

const classes = computed(
	(): Record<string, boolean> => ({
		[props.class]: true,
		'ui-button': true,
		'ui-button--primary': props.theme === 'primary',
		'ui-button--transparent': props.theme === 'transparent',
	}),
);
</script>

<template>
	<button
		:class="classes"
		:type="props.type"
		@click="emit('click')"
	>
		<slot></slot>
	</button>
</template>

<style lang="scss">
.ui-button {
	background-color: #4172e5;
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	border-radius: 2px;
	border: none;
	margin: 0;
	color: white;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #5480e7;
	}

	&--transparent {
		background-color: transparent;
		border: 1px solid white;
		color: white;
	}
}
</style>
