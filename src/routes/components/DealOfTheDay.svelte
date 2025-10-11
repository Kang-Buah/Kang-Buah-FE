<script>
	import { onMount } from 'svelte';

	// Available decor images; name (without extension) is the title of the deal
	const decorImages = [
		'Nge-grape-in_Your_Day.png',
		'Peel_the_Joy.png',
		'Slice_it_Love_it[1].jpg',
		'Slice_it_Love_it[2].jpg'
	];

	const dealTypes = [
		{ key: 'flash', label: 'Flash Sale', blurb: 'Diskon Kilat untuk Produk Terpilih!' },
		{
			key: 'downprice',
			label: 'Turun Harga',
			blurb: 'Harga Turun! Jangan Lewatkan Kesempatan Ini.'
		},
		{ key: 'voucher', label: 'Voucher Spesial', blurb: 'Gunakan voucher untuk hemat lebih banyak.' }
	];

	function getWeekNumber(date) {
		const oneJan = new Date(date.getFullYear(), 0, 1);
		const millisecondsInDay = 86400000;
		return Math.ceil(((date - oneJan) / millisecondsInDay + oneJan.getDay() + 1) / 7);
	}

	function seededRandom(seed) {
		let x = Math.sin(seed) * 10000;
		return x - Math.floor(x);
	}

	function mapTitle(filename) {
		if (filename === 'Slice_it_Love_it[1].jpg' || filename === 'Slice_it_Love_it[2].jpg') {
			return 'Slice it, Love it!';
		}
		if (filename === 'Peel_the_Joy.png') {
			return 'Peel the Joy!';
		}
		if (filename === 'Nge-grape-in_Your_Day.png') {
			return 'Nge-grape-in Your Day!';
		}
		// Fallback: simple replacement without regex
		const noExt = filename.split('.').slice(0, -1).join('.');
		return noExt.split('_').join(' ');
	}

	// Pick a consistent random per week
	const now = new Date();
	const weekSeed = Number(`${now.getFullYear()}${getWeekNumber(now)}`);
	const typeIndex = Math.floor(seededRandom(weekSeed) * dealTypes.length);
	const imageIndex = Math.floor(seededRandom(weekSeed + 42) * decorImages.length);

	const chosenType = dealTypes[typeIndex];
	const chosenImage = decorImages[imageIndex];

	// Derive corresponding .webp filename for the chosen image
	const chosenImageWebp = `${chosenImage.split('.').slice(0, -1).join('.')}.webp`;

	// Title is mapped explicitly from filename (no regex)
	const title = mapTitle(chosenImage);

	// Countdown: random 12h or 24h window from now
	const durationHours = seededRandom(weekSeed + 7) > 0.5 ? 12 : 24;
	const endTime = new Date(now.getTime() + durationHours * 60 * 60 * 1000);

	let remaining = '';
	let timerId;

	function updateRemaining() {
		const diff = endTime.getTime() - Date.now();
		if (diff <= 0) {
			remaining = '00:00:00';
			clearInterval(timerId);
			return;
		}
		const hours = Math.floor(diff / (1000 * 60 * 60));
		const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((diff % (1000 * 60)) / 1000);
		remaining = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
	}

	onMount(() => {
		updateRemaining();
		timerId = setInterval(updateRemaining, 1000);
		return () => clearInterval(timerId);
	});
</script>

<section class="relative overflow-hidden bg-white py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-8">
		<div
			class="relative grid grid-cols-1 items-center gap-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-primary/5 to-secondary/5 p-6 sm:grid-cols-2 sm:p-10"
		>
			<div>
				<p
					class="mb-2 inline-flex items-center rounded-full bg-black/80 px-3 py-1 text-xs font-semibold tracking-wide text-white"
				>
					<span class="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-secondary"></span>
					{chosenType.label}
				</p>
				<h2 class="mb-3 font-brand text-3xl font-light sm:text-4xl">
					<span class="text-primary">{title}</span>
				</h2>
				<p class="mb-5 max-w-prose text-slate-700">{chosenType.blurb}</p>

				<div class="mb-6 inline-flex items-center gap-2 rounded-xl bg-black/5 px-4 py-3">
					<span class="text-sm font-medium text-slate-700">Berakhir dalam</span>
					<span class="font-mono text-xl font-bold tracking-wider text-secondary">{remaining}</span>
				</div>

				<div class="flex flex-wrap gap-3">
					{#if chosenType.key === 'voucher'}
						<a
							href="/#voucher"
							class="rounded-md bg-secondary px-5 py-3 font-medium text-white hover:bg-secondary/90"
							>Ambil Voucher</a
						>
					{:else if chosenType.key === 'flash'}
						<a
							href="/#flash-sale"
							class="rounded-md bg-primary px-5 py-3 font-medium text-white hover:bg-primary/90"
							>Belanja Sekarang</a
						>
					{:else}
						<a
							href="/#promo"
							class="rounded-md bg-primary px-5 py-3 font-medium text-white hover:bg-primary/90"
							>Lihat Promo</a
						>
					{/if}
					<a
						href="/#syarat-ketentuan"
						class="rounded-md border border-slate-300 px-5 py-3 font-medium text-slate-800 hover:border-primary hover:text-primary"
						>S&K Berlaku</a
					>
				</div>
			</div>

			<div class="relative">
				<picture>
					<source
						srcset={`/assets/images/decor/deal-of-the-day/${chosenImageWebp}`}
						type="image/webp"
					/>
					<img
						src={`/assets/images/decor/deal-of-the-day/${chosenImage}`}
						alt={title}
						class="mx-auto w-full max-w-md rounded-2xl object-cover shadow-xl"
						loading="lazy"
					/>
				</picture>
				<div
					class="pointer-events-none absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full bg-secondary/20 blur-xl sm:block"
				></div>
				<div
					class="pointer-events-none absolute -top-6 -right-6 hidden h-24 w-24 rounded-full bg-primary/20 blur-xl sm:block"
				></div>
			</div>
		</div>
	</div>

	<!-- subtle background blobs -->
	<div
		class="pointer-events-none absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl"
		aria-hidden="true"
	>
		<div
			class="relative left-1/2 aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-15 sm:w-[72rem]"
			style="clip-path: polygon(74% 44%, 100% 67%, 97% 20%, 88% 0%, 55% 2%, 13% 19%, 0% 49%, 17% 72%, 46% 91%, 81% 90%, 98% 75%);"
		></div>
	</div>
</section>
