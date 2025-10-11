<script>
	import { MapPin, Phone, Instagram, Clock, Mail } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Kontak Kami | Kang Buah</title>
	<meta
		name="description"
		content="Hubungi Kang Buah untuk informasi produk, pemesanan, atau pertanyaan lainnya. Kami siap melayani Anda dengan ramah dan profesional."
	/>
</svelte:head>

<!-- Hero Banner Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
	<div class="absolute inset-0 bg-black/20"></div>
	<div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
		<div class="text-center">
			<h1 class="mb-6 font-brand text-4xl font-light text-white sm:text-5xl lg:text-6xl">
				<span class="text-primary">Kontak</span> Kami
			</h1>
			<p class="mx-auto max-w-2xl text-lg text-white/90 sm:text-xl">
				Hubungi kami untuk informasi produk, pemesanan, atau pertanyaan lainnya
			</p>
		</div>
	</div>

	<!-- Background Banner Image -->
	<div class="absolute inset-0 -z-10">
        <picture>
            <source
                srcset="/assets/images/decor/contact/Apple-Slices-Banner.webp"
                type="image/webp"
            />
            <img
                src="/assets/images/decor/contact/Apple-Slices-Banner.jpg"
                alt="Apple Slices Banner"
                class="h-full w-full object-cover brightness-50"
                loading="eager"
            />
        </picture>
	</div>
</section>

<section class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-8">
		<div class="mx-auto max-w-2xl p-8">
			<div class="text-center">
				<h2 class="mb-[1em] font-brand text-3xl font-light sm:text-4xl">
					<span class="text-primary">Informasi</span> Kontak
				</h2>
				<div class="space-y-8">
					<!-- Address -->
					<div class="flex items-start">
						<div class="mr-4 flex min-w-12 aspect-square items-center justify-center rounded-full bg-primary/10">
							<MapPin class="h-6 w-6 text-primary" />
						</div>
						<div class="text-left">
							<h3 class="mb-2 text-lg font-semibold">Alamat</h3>
							<address class="text-slate-600">
								<a
									href="https://maps.app.goo.gl/aWx4LiB7YM5bnsgX6"
									target="_blank"
									class="hover:text-primary hover:underline"
								>
									Jl. Gudang Air No. 2, RT 003 RW 002, Rambutan, Kec. Ciracas, Kota Jakarta Timur,
									Daerah Khusus Ibukota Jakarta 13830
								</a>
							</address>
						</div>
					</div>

					<!-- Phone -->
					<div class="flex items-start">
						<div
							class="mr-4 flex min-w-12 aspect-square items-center justify-center rounded-full bg-secondary/10"
						>
							<Phone class="h-6 w-6 text-secondary" />
						</div>
						<div class="text-left">
							<h3 class="mb-2 text-lg font-semibold">Telepon (WhatsApp)</h3>
							<a href="https://wa.me/628811490430" class="text-slate-600 hover:text-primary hover:underline">
								+62 881 1490 430
							</a>
						</div>
					</div>

					<!-- Instagram -->
					<div class="flex items-start">
						<div class="mr-4 flex min-w-12 aspect-square items-center justify-center rounded-full bg-primary/10">
							<Instagram class="h-6 w-6 text-primary" />
						</div>
						<div class="text-left">
							<h3 class="mb-2 text-lg font-semibold">Instagram</h3>
							<a
								href="https://instagram.com/kangbuahsegar"
								target="_blank"
								class="text-slate-600 hover:text-primary hover:underline"
							>
								@kangbuahsegar
							</a>
						</div>
					</div>

					<!-- Business Hours -->
					<div class="flex items-start">
						<div
							class="mr-4 flex min-w-12 aspect-square items-center justify-center rounded-full bg-secondary/10"
						>
							<Clock class="h-6 w-6 text-secondary" />
						</div>
						<div class="text-left">
							<h3 class="mb-2 text-lg font-semibold">Jam Operasional</h3>
							<div class="text-slate-600">
								<p>Senin - Jumat: 08:00 - 18:00 WIB</p>
								<p>Sabtu: 08:00 - 16:00 WIB</p>
								<p>Minggu: Tutup</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
