<script>
	import { Menu } from '@lucide/svelte';

	let showMenu = $state(false);
</script>

<header class="border-b border-slate-300 text-white">
	<div class="w-full flex items-center justify-between p-4">
		<a class="font-brand text-2xl font-light" href="/">
			<span class="text-primary">KANG</span>
			<span class="text-secondary">BUAH</span>
		</a>
		<button
			class={`text-black focus:outline-none sm:hidden p-2 rounded-lg transition-all duration-300 ${ showMenu ? "bg-slate-200" : "" }`}
			onclick={() => (showMenu = !showMenu)}
		>
			<Menu size="24" />
		</button>
		<nav class="hidden sm:block">
			<ul class="flex gap-4 text-black">
				<li class="font-medium hover:text-primary">
					<a href="/">Home</a>
				</li>
				<li class="font-medium hover:text-primary">
					<a href="/">About</a>
				</li>
				<li class="font-medium hover:text-primary">
					<a href="/">Blog</a>
				</li>
				<li class="font-medium hover:text-primary">
					<a href="/">Contact</a>
				</li>
			</ul>
		</nav>
		<div class="hidden sm:block"></div>
	</div>
</header>

<nav class={`${showMenu ? "" : "hidden"} sm:hidden`}>
	<ul class="flex w-full flex-col items-stretch bg-primary text-white px-2 py-4">
		<li class="font-semibold p-4 hover:text-primary hover:bg-white rounded-2xl">
			<a href="/">Home</a>
		</li>
		<li class="font-semibold p-4 hover:text-primary hover:bg-white rounded-2xl">
			<a href="/">About</a>
		</li>
		<li class="font-semibold p-4 hover:text-primary hover:bg-white rounded-2xl">
			<a href="/">Blog</a>
		</li>
		<li class="font-semibold p-4 hover:text-primary hover:bg-white rounded-2xl">
			<a href="/">Contact</a>
		</li>
	</ul>
</nav>
