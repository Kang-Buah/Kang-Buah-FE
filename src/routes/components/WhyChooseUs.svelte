<script>
	import { Truck, Leaf, BadgeCheck, Headphones } from '@lucide/svelte';

	const features = [
		{
			icon: Truck,
			title: 'Gratis Ongkir',
			desc: 'Untuk pesanan di atas Rp500.000,-'
		},
		{
			icon: Leaf,
			title: 'Selalu Segar',
			desc: 'Produk dikemas rapi dan higienis'
		},
		{
			icon: BadgeCheck,
			title: 'Kualitas Unggul',
			desc: 'Hanya produk pilihan terbaik'
		},
		{
			icon: Headphones,
			title: 'Dukungan',
			desc: 'Layanan pelanggan 24/7'
		}
	];
</script>

<section class="bg-white py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-8">
		<h2 class="mb-8 text-center font-brand text-3xl font-light sm:text-4xl">
			<span class="text-primary">Mengapa</span> Memilih Kami
		</h2>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each features as f}
				<div
					class="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
				>
					<div
						class="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition group-hover:bg-primary group-hover:text-white"
					>
						<svelte:component this={f.icon} size="24" />
					</div>
					<h3 class="mb-2 text-lg font-semibold">{f.title}</h3>
					<p class="text-slate-600">{f.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
