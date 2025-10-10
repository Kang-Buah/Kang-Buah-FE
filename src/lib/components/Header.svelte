<script>
	import { Menu } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let showMenu = false;
	let currentPath = '/';

	const navLinks = [
		{ name: 'Beranda', href: '/' },
		{ name: 'Tentang Kami', href: '/#tentang-kami' },
		{ name: 'Blog', href: '/#blog' },
		{ name: 'Kontak', href: '/#kontak' }
	];

	onMount(() => {
		currentPath = window.location.pathname;
	});
</script>

<header class="relative z-10 border-b border-slate-300 bg-white">
	<div class="flex w-full items-center justify-between p-4">
		<a class="font-brand text-2xl font-light" href="/">
			<span class="text-primary">KANG</span>
			<span class="text-secondary">BUAH</span>
		</a>
		<button
			class={`rounded-lg p-2 text-black transition-all duration-300 focus:outline-none sm:hidden ${showMenu ? 'bg-slate-200' : ''}`}
			on:click={() => (showMenu = !showMenu)}
		>
			<Menu size="24" />
		</button>
		<nav class="hidden sm:block">
			<ul class="flex gap-4 text-black">
				{#each navLinks as link}
					<li
						class={`hover:text-primary hover:underline hover:decoration-secondary ${currentPath === link.href ? 'font-bold text-primary underline decoration-secondary' : 'font-medium'}`}
					>
						<a href={link.href}>{link.name}</a>
					</li>
				{/each}
			</ul>
		</nav>
		<div class="hidden sm:block"></div>
	</div>
</header>

<nav
	class={`${
		showMenu ? 'translate-y-16' : '-translate-y-full'
	} absolute top-0 left-0 z-5 w-full transition-transform duration-300 ease-in-out sm:hidden`}
>
	<ul class="flex w-full flex-col items-stretch bg-primary py-4 text-white">
		{#each navLinks as link}
			<li
				class={`hover:bg-white ${currentPath === link.href ? 'bg-white font-bold text-secondary' : 'font-semibold hover:text-primary'} `}
			>
				<a href={link.href} class="block w-full p-6">{link.name}</a>
			</li>
		{/each}
	</ul>
</nav>
