<script lang="ts">
    import Navbar from "$lib/components/layout/Navbar.svelte";
    import Hero from "$lib/components/layout/Hero.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import DownloadSection from "$lib/components/layout/DownloadSection.svelte";
    import FAQs from "$lib/components/features/FAQs.svelte";
    import CTA from "$lib/components/features/CTA.svelte";
    import Footer from "$lib/components/layout/Footer.svelte";

    import type { PageProps } from './$types';
    let { form } : PageProps = $props();
    
</script>

<header class="xl:pl-12 2xl:pl-24 mb-20">
    <Navbar />
    <Hero />
</header>
<main class="flex flex-col gap-20">
    <Features />
    <DownloadSection />
    <FAQs class="mt-20" />
    <CTA form={form} />
</main>

<footer>
    <Footer class="bg-secondary w-full
    flex flex-col gap-12 md:gap-16 items-center py-8 
    md:flex-row md:justify-center
    lg:px-20 xl:px-32" />
</footer>
