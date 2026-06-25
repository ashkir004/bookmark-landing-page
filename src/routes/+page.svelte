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
<!-- xl:pl-12 2xl:pl-24 -->
<header class=" mb-20 lg:max-w-5xl lg:ml-15
    xl:ml-auto xl:max-w-11/12">
    <Navbar class=" lg:max-w-4xl xl:max-w-11/12" />
    <Hero />
</header>
<main class="flex flex-col gap-20">
    <Features />
    <DownloadSection />
    <FAQs class="mt-20" />
    <CTA form={form} />
</main>

<footer class="bg-secondary">
    <Footer class="bg-secondary w-full
    flex flex-col gap-12 md:gap-16 items-center py-8 
    md:flex-row md:justify-center
    lg:max-w-4xl xl:max-w-10/12 mx-auto" />
</footer>
