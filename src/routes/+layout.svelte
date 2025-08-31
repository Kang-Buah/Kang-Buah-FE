<script>
	import '../app.css';
	import Header from './components/Header.svelte';

	let { children } = $props();
</script>

<div>
	<Header />
	<main>
		{@render children?.()}
	</main>
</div>
