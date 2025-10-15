<script>
	import { Heart, Users, Clock, Award } from '@lucide/svelte';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Tentang Kami | Kang Buah</title>
	<meta
		name="description"
		content="Tentang Kang Buah - Teman sehat yang menghadirkan buah segar dan bumbu pilihan langsung ke meja kerja atau rumah Anda."
	/>
</svelte:head>

<!-- Hero Banner Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
	<div class="absolute inset-0 bg-black/20"></div>
	<div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
		<div class="text-center">
			<h1
				class="mb-6 font-brand text-4xl font-light text-white sm:text-5xl lg:text-6xl"
				data-aos="zoom-in"
				data-aos-duration="1200"
			>
				Tentang Kami
			</h1>
			<p
				class="text-md mx-auto max-w-2xl text-white/90 sm:text-lg md:text-xl"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="200"
			>
				Mengenal lebih dekat cerita di balik <a
					class="font-bold hover:text-primary hover:underline hover:decoration-secondary"
					href="/">Kang Buah</a
				>
			</p>
		</div>
	</div>

	<!-- Background Banner Image -->
	<div class="absolute inset-0 -z-10">
		<picture>
			<source
				srcset="/assets/images/decor/about-us/Kang-Buah-Products-Banner.webp"
				type="image/webp"
			/>
			<img
				src="/assets/images/decor/about-us/Kang-Buah-Products-Banner.jpg"
				alt="Kang Buah Products Banner"
				class="h-full w-full object-cover brightness-[35%]"
				loading="eager"
			/>
		</picture>
	</div>
</section>

<!-- Our Story Section -->
<section class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
			<!-- Decorative Image -->
			<div class="relative" data-aos="fade-right" data-aos-duration="1200">
				<div class="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
					<picture>
						<source
							srcset="/assets/images/decor/about-us/A-Plate-of-Fruits.webp"
							type="image/webp"
						/>
						<img
							src="/assets/images/decor/about-us/A-Plate-of-Fruits.jpg"
							alt="Piring buah segar"
							class="h-full w-full object-cover"
							loading="lazy"
						/>
					</picture>
				</div>
				<!-- Decorative elements -->
				<div
					class="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full bg-primary/20 blur-xl sm:block"
					data-aos="zoom-in"
					data-aos-duration="800"
					data-aos-delay="400"
				></div>
				<div
					class="absolute -top-6 -right-6 hidden h-24 w-24 rounded-full bg-secondary/20 blur-xl sm:block"
					data-aos="zoom-in"
					data-aos-duration="800"
					data-aos-delay="600"
				></div>
			</div>

			<!-- Story Content -->
			<div class="flex flex-col justify-center" data-aos="fade-left" data-aos-duration="1200">
				<h2 class="mb-6 font-brand text-3xl font-light sm:text-4xl">
					<span class="text-primary">Cerita</span> Kami
				</h2>
				<div class="space-y-6 text-slate-700">
					<p
						class="text-lg leading-relaxed"
						data-aos="fade-up"
						data-aos-duration="1000"
						data-aos-delay="200"
					>
						Berawal dari obrolan ringan di kantor, kami melihat satu kebutuhan sederhana, banyak
						teman kerja yang ingin makan buah segar setiap hari, tapi malas atau tidak sempat ke
						pasar atau supermarket. Dari sinilah Kang Buah lahir menjadi teman sehat yang siap
						menghadirkan buah segar dan bumbu pilihan langsung ke meja kerja atau ke rumah Anda,
						dengan harga yang bersahabat.
					</p>
					<p
						class="text-lg leading-relaxed"
						data-aos="fade-up"
						data-aos-duration="1000"
						data-aos-delay="400"
					>
						Kami percaya, hidup sehat itu harus praktis, terjangkau, dan <i>nggak ribet</i>. Misi
						kami sederhana yaitu membantu siapa pun mendapatkan buah dan bumbu berkualitas tanpa
						perlu repot, dengan layanan yang fleksibel dan cepat.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Values Section -->
<section class="bg-slate-50 py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-8">
		<div class="mb-12 text-center">
			<h2
				class="mb-4 font-brand text-3xl font-light sm:text-4xl"
				data-aos="fade-down"
				data-aos-duration="1000"
			>
				<span class="text-primary">Nilai</span> Kami
			</h2>
			<p
				class="mx-auto max-w-2xl text-slate-600"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="200"
			>
				Prinsip-prinsip yang menjadi fondasi dalam setiap layanan kami
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			<div class="text-center" data-aos="flip-left" data-aos-duration="1000">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
				>
					<Heart class="h-8 w-8 text-primary" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Peduli</h3>
				<p class="text-slate-600">
					Kami peduli dengan kesehatan dan kesejahteraan setiap pelanggan
				</p>
			</div>

			<div class="text-center" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="150">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10"
				>
					<Users class="h-8 w-8 text-secondary" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Komunitas</h3>
				<p class="text-slate-600">Membangun komunitas sehat melalui produk berkualitas</p>
			</div>

			<div class="text-center" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="300">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
				>
					<Clock class="h-8 w-8 text-primary" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Praktis</h3>
				<p class="text-slate-600">Layanan yang mudah, cepat, dan tidak merepotkan</p>
			</div>

			<div class="text-center" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="450">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10"
				>
					<Award class="h-8 w-8 text-secondary" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Kualitas</h3>
				<p class="text-slate-600">Produk segar dan berkualitas dengan harga terjangkau</p>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-8">
		<h2
			class="mb-6 font-brand text-3xl font-light sm:text-4xl"
			data-aos="zoom-in"
			data-aos-duration="1000"
		>
			Siap <span class="text-primary">Bergabung</span> dengan Kami?
		</h2>
		<p
			class="mb-8 text-lg text-slate-600"
			data-aos="fade-up"
			data-aos-duration="1000"
			data-aos-delay="200"
		>
			Mari mulai hidup sehat dengan cara yang praktis dan menyenangkan
		</p>
		<div
			class="flex flex-wrap justify-center gap-4"
			data-aos="zoom-in"
			data-aos-duration="1000"
			data-aos-delay="400"
		>
			<button
				onclick={() => goto('/#produk')}
				class="w-full rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90 sm:w-fit"
			>
				Lihat Produk Kami
			</button>
			<button
				onclick={() => goto('/kontak')}
				class="w-full rounded-md border border-slate-300 px-6 py-3 font-medium text-slate-800 hover:border-primary hover:text-primary sm:w-fit"
			>
				Hubungi Kami
			</button>
		</div>
	</div>
</section>
