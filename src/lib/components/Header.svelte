<script>
	import { Menu } from '@lucide/svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let showMenu = false;

	const navLinks = [
		{ name: 'Beranda', href: '/' },
		{ name: 'Tentang Kami', href: '/tentang-kami' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Kontak', href: '/kontak' }
	];

	// fungsi cek aktif
	function isActiveLink(href) {
		return $page.url.pathname === href;
	}

	// navigasi reaktif tanpa reload penuh
	async function handleNavigation(href) {
		showMenu = false;
		await goto(href);
	}
</script>

<header id="top" class="relative z-10 border-b border-slate-300 bg-white">
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

		<!-- menu desktop -->
		<nav class="hidden sm:block">
			<ul class="flex gap-4 text-black">
				{#each navLinks as link}
					<li>
						<button
							on:click={() => handleNavigation(link.href)}
							class={`font-medium transition-all duration-200 hover:text-primary hover:underline hover:decoration-secondary hover:decoration-2 hover:underline-offset-4 ${
								isActiveLink(link.href)
									? 'font-bold text-primary underline decoration-secondary decoration-2 underline-offset-4'
									: ''
							}`}
						>
							{link.name}
						</button>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<!-- menu mobile -->
<nav
	class={`${
		showMenu ? 'translate-y-16' : '-translate-y-full'
	} absolute top-0 left-0 z-5 w-full transition-transform duration-300 ease-in-out sm:hidden`}
>
	<ul class="flex w-full flex-col items-stretch bg-primary py-4 text-white">
		{#each navLinks as link}
			<li
				class={`transition-all duration-200 hover:bg-white hover:text-primary ${
					isActiveLink(link.href) ? 'bg-white font-bold text-secondary' : 'font-semibold'
				}`}
			>
				<button on:click={() => handleNavigation(link.href)} class="block w-full p-6 text-left">
					{link.name}
				</button>
			</li>
		{/each}
	</ul>
</nav>
