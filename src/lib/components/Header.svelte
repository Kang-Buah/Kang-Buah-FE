<script>
	import { Menu } from '@lucide/svelte';

	let showMenu = $state(false);
</script>

<header class="relative z-10 border-b border-slate-300 bg-white">
	<div class="flex w-full items-center justify-between p-4">
		<a class="font-brand text-2xl font-light" href="/">
			<span class="text-primary">KANG</span>
			<span class="text-secondary">BUAH</span>
		</a>
		<button
			class={`rounded-lg p-2 text-black transition-all duration-300 focus:outline-none sm:hidden ${showMenu ? 'bg-slate-200' : ''}`}
			onclick={() => (showMenu = !showMenu)}
		>
			<Menu size="24" />
		</button>
		<nav class="hidden sm:block">
			<ul class="flex gap-4 text-black">
				<li class="font-medium hover:text-primary">
					<a href="/">Beranda</a>
				</li>
				<li class="font-medium hover:text-primary">
					<a href="/">Tentang Kami</a>
				</li>
				<li class="font-medium hover:text-primary">
					<a href="/">Blog</a>
				</li>
				<li class="font-medium hover:text-primary">
					<a href="/">Kontak</a>
				</li>
			</ul>
		</nav>
		<div class="hidden sm:block"></div>
	</div>
</header>

<nav
	class={`${
		showMenu ? 'translate-y-16' : '-translate-y-full'
	} absolute top-0 left-0 w-full transition-transform duration-300 ease-in-out sm:hidden`}
>
	<ul class="flex w-full flex-col items-stretch bg-primary px-2 py-4 text-white">
		<li class="rounded-2xl font-semibold hover:bg-white hover:text-primary">
			<a href="/" class="block w-full p-4">Beranda</a>
		</li>
		<li class="rounded-2xl font-semibold hover:bg-white hover:text-primary">
			<a href="/" class="block w-full p-4">Tentang Kami</a>
		</li>
		<li class="rounded-2xl font-semibold hover:bg-white hover:text-primary">
			<a href="/" class="block w-full p-4">Blog</a>
		</li>
		<li class="rounded-2xl font-semibold hover:bg-white hover:text-primary">
			<a href="/" class="block w-full p-4">Kontak</a>
		</li>
	</ul>
</nav>
