<script lang="ts">
    import Button from '../ui/Button.svelte';
    import HeroIllustration from '$lib/assets/images/illustration-hero.svg';
</script>

<div class="flex flex-col gap-12 py-8 justify-items-center">
    <div class="grid grid-cols-1 grid-rows-1 justify-items-center items-start relative">
        <span class="col-span-full row-span-full bg-primary inline-block w-[80%] h-[78%] md:w-[70%] self-end justify-self-end rounded-l-full"></span>
        <img class="col-span-full row-span-full" src={HeroIllustration} alt="Hero: A bookmark Manager Screen" />
    </div>
    <div class="flex flex-col gap-6 text-center px-6 md:px-16">
        <h1 class="text-display text-center text-secondary capitalize">A Simple Bookmark Manager</h1>
        <p class="text-body md:text-lead text-muted/70">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
    </div>
    <div class="flex flex-row gap-4 px-6 md:px-16 items-center justify-center ">
        <Button variant="solid" text="Get it on Chrome" class="px-3 py-3" />
        <Button variant="solidSecondary" text="Get it on Firefox" class="px-3 py-3" />
    </div>
</div>