<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	let { children } = $props();

	onMount(() => {
		AOS.init({
			duration: 500,
			easing: 'ease-out-cubic',
			once: false,
			offset: 80,
			delay: 0,
			mirror: true,
			anchorPlacement: 'top-bottom'
		});
	});
</script>

<div>
	<Header />
	<main>
		{@render children?.()}
	</main>
	<Footer />
</div>
