<script>
	import '../app.css';
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';

	let { children } = $props();
</script>

<div>
	<Header />
	<main>
		{@render children?.()}
	</main>
	<Footer />
</div>
