<script>
	import { ArrowUp, MapPin, Phone } from '@lucide/svelte';
	import { Instagram, Facebook, Whatsapp } from 'svelte-bootstrap-icons';

	const socialMediaLinks = [
		{
			name: 'WhatsApp',
			icon: Whatsapp,
			url: 'https://wa.me/628811490430'
		},
		{
			name: 'Instagram',
			icon: Instagram,
			url: 'https://www.instagram.com/kangbuahsegar'
		},
		{
			name: 'Facebook',
			icon: Facebook,
			url: 'https://www.facebook.com/kangbuahsegar'
		}
	];
</script>

<footer class="py-12">
	<div class="container mx-auto px-4">
		<div class="mb-8 flex justify-center">
			<div>
				<a
					href="#top"
					class="relative flex h-12 w-12 animate-bounce items-center justify-center rounded-full border-4 border-primary bg-secondary transition hover:scale-115"
				>
					<span class="text-xl font-bold text-white">
						<ArrowUp size="24" />
					</span>
				</a>
			</div>
		</div>
		<section class="mb-8 flex flex-wrap gap-8">
			<div class="w-full grow">
				<h2 class="mb-4 font-brand text-3xl font-light">
					<span class="text-primary">KANG</span>
					<span class="text-secondary">BUAH</span>
				</h2>
				<p class="max-w-xs">
					Hadir untuk Anda dalam mendapatkan buah-buahan segar berkualitas dengan harga terjangkau!
				</p>
				<ul class="mt-4 flex space-x-4">
					{#each socialMediaLinks as link}
						<li class="transition-transform duration-300 hover:scale-110">
							<a
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-gray-600 hover:text-primary"
								aria-label={link.name}
								title={`${link.name} Account`}
							>
								<link.icon width={20} height={20} />
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="grow">
				<h2 class="mb-4 text-xl font-bold">Menu</h2>
				<ul>
					<li><a href="/" class="inline-block py-2 hover:text-primary">Toko</a></li>
					<li><a href="/" class="inline-block py-2 hover:text-primary">Tentang Kami</a></li>
					<li><a href="/" class="inline-block py-2 hover:text-primary">Jurnal</a></li>
					<li><a href="/" class="inline-block py-2 hover:text-primary">Hubungi Kami</a></li>
				</ul>
			</div>
			<div class="grow">
				<h2 class="mb-4 text-xl font-bold">Bantuan</h2>
				<div class="flex">
					<ul class="mr-8">
						<li>
							<a href="/" class="inline-block py-2 hover:text-primary">Informasi Pengiriman</a>
						</li>
						<li>
							<a href="/" class="inline-block py-2 hover:text-primary"
								>Pengembalian &amp; Penukaran</a
							>
						</li>
						<li>
							<a href="/" class="inline-block py-2 hover:text-primary">Syarat &amp; Ketentuan</a>
						</li>
						<li><a href="/" class="inline-block py-2 hover:text-primary">Kebijakan Privasi</a></li>
					</ul>
					<ul>
						<li><a href="/" class="inline-block py-2 hover:text-primary">FAQs</a></li>
						<li><a href="/" class="inline-block py-2 hover:text-primary">Kontak</a></li>
					</ul>
				</div>
			</div>
			<div class="max-w-xs">
				<h2 class="mb-4 text-xl font-bold">Punya Pertanyaan?</h2>
				<ul>
					<li class="mb-3 flex items-start">
						<MapPin class="mt-1 mr-2 h-4 w-4 flex-shrink-0" />
						<address class="text-sm">
							<a
								class="hover:text-primary"
								target="_blank"
								href="https://maps.app.goo.gl/aWx4LiB7YM5bnsgX6"
							>
								Jl. Gudang Air No. 2, RT 003 RW 002, Rambutan, Kec. Ciracas, Kota Jakarta Timur,
								Daerah Khusus Ibukota Jakarta 13830
							</a>
						</address>
					</li>
					<li class="mb-3 flex items-center">
						<Phone class="mr-2 h-4 w-4 flex-shrink-0" />
						<a href="https://wa.me/628811490430" target="_blank" class="text-sm hover:text-primary"
							>+628811490430</a
						>
					</li>
					<li class="flex items-center">
						<Instagram class="mr-2 h-4 w-4 flex-shrink-0" />
						<a
							href="https://instagram.com/kangbuahsegar"
							target="_blank"
							class="text-sm hover:text-primary">@kangbuahsegar</a
						>
					</li>
				</ul>
			</div>
		</section>
		<div class="text-center text-sm text-gray-700">
			<p>
				&copy; {new Date().getFullYear()} Kang Buah. All rights reserved.
			</p>
		</div>
	</div>
</footer>
