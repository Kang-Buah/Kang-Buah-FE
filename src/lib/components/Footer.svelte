<script>
	import { ArrowUp } from '@lucide/svelte';
</script>

<footer class="py-12">
	<div class="container mx-auto px-4">
		<div class="mb-8 flex justify-center">
			<div>
				<a
					href="/"
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
				<!-- <ul class="mt-4 flex space-x-4">
					<li><a href="/" class="hover:text-white"><span>Twitter</span></a></li>
					<li><a href="/" class="hover:text-white"><span>Facebook</span></a></li>
					<li><a href="/" class="hover:text-white"><span>Instagram</span></a></li>
				</ul> -->
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
						<li><a href="/" class="inline-block py-2 hover:text-primary">Informasi Pengiriman</a></li>
						<li>
							<a href="/" class="inline-block py-2 hover:text-primary">Pengembalian &amp; Penukaran</a>
						</li>
						<li><a href="/" class="inline-block py-2 hover:text-primary">Syarat &amp; Ketentuan</a></li>
						<li><a href="/" class="inline-block py-2 hover:text-primary">Kebijakan Privasi</a></li>
					</ul>
					<ul>
						<li><a href="/" class="inline-block py-2 hover:text-primary">FAQs</a></li>
						<li><a href="/" class="inline-block py-2 hover:text-primary">Kontak</a></li>
					</ul>
				</div>
			</div>
			<!-- <div>
				<h2 class="mb-4 text-xl font-bold">Punya Pertanyaan?</h2>
				<ul>
					<li class="mb-3 flex items-start">
						<span class="material-icons mr-2">Alamat:</span>
						<span>203 Fake St. Mountain View, San Francisco, California, USA</span>
					</li>
					<li class="mb-3 flex items-center">
						<span class="material-icons mr-2">phone</span>
						<a href="/" class="hover:text-white">+2 392 3929 210</a>
					</li>
					<li class="flex items-center">
						<span class="material-icons mr-2">email</span>
						<a href="/" class="hover:text-white">info@yourdomain.com</a>
					</li>
				</ul>
			</div> -->
		</section>
		<div class="text-center text-sm text-gray-700">
			<p>
				&copy; {new Date().getFullYear()} Kang Buah All rights reserved.
			</p>
		</div>
	</div>
</footer>
