<script lang="ts">
    import Navbar from "$lib/components/layout/Navbar.svelte";
    import Hero from "$lib/components/layout/Hero.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import DownloadSection from "$lib/components/layout/DownloadSection.svelte";
    import FAQs from "$lib/components/features/FAQs.svelte";
</script>

<header class="xl:pl-12 2xl:pl-24 mb-20">
    <Navbar />
    <Hero />
</header>
<main class="flex flex-col gap-20">
    <Features />
    <DownloadSection />
    <FAQs class="mt-20" />
</main>
