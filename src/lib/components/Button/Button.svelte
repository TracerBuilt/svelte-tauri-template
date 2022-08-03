<script lang="ts">
	export let primary = true
	export let size = 'normal'
</script>

<button
	class={`asd flex items-center justify-center px-[0.5em] py-[0.25em] ${
		primary ? 'bg-blue-7 text-white' : 'border border-blue-11 text-blue-11'
	} ${size === 'small' ? 'text-sm' : size === 'normal' ? 'text-base' : 'text-lg'}`}><slot /></button
>
