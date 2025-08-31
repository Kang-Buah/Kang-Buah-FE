<script>
	import { Menu } from '@lucide/svelte';

	let showMenu = $state(false);
</script>

<header class="border-b border-slate-300">
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

<nav class={`${showMenu ? '' : 'hidden'} sm:hidden`}>
	<ul class="text-white flex w-full flex-col items-stretch bg-primary px-2 py-4">
		<li class="rounded-2xl font-semibold hover:bg-white hover:text-primary">
			<a href="/" class="p-4 w-full block">Beranda</a>
		</li>
		<li class="rounded-2xl font-semibold hover:bg-white hover:text-primary">
			<a href="/" class="p-4 w-full block">Tentang Kami</a>
		</li>
		<li class="rounded-2xl font-semibold hover:bg-white hover:text-primary">
			<a href="/" class="p-4 w-full block">Blog</a>
		</li>
		<li class="rounded-2xl font-semibold hover:bg-white hover:text-primary">
			<a href="/" class="p-4 w-full block">Kontak</a>
		</li>
	</ul>
</nav>
