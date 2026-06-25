<script lang="ts">
    import Button from '../ui/Button.svelte';
    import HeroIllustration from '$lib/assets/images/illustration-hero.svg';
</script>

<div class="flex flex-col gap-12 lg:gap-8 justify-items-end lg:grid lg:grid-cols-2 lg:items-center">
    <div class="grid grid-cols-1 grid-rows-1 justify-items-center items-start">
        <span aria-hidden="true" class="col-span-full row-span-full bg-primary inline-block w-[80%] h-[78%] md:w-[70%] self-end justify-self-end rounded-l-full"></span>
        <img class="col-span-full row-span-full" src={HeroIllustration} alt="Hero: A bookmark Manager Screen" />
    </div>
    <div class="flex flex-col gap-6 col-start-1 row-start-1">
    <!-- px-6 md:px-16 lg:pl-16 lg:pr-0  -->
        <div class="flex flex-col gap-6 text-center lg:text-start">
            <h1 class="text-display text-center lg:text-start text-secondary capitalize">A Simple Bookmark Manager</h1>
            <p class="text-body md:text-lead text-muted/70 text-pretty">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        </div>
        <!-- px-6 md:px-16 -->
        <div class="flex flex-row gap-4 items-center justify-center lg:justify-start">
            <Button variant="solid" text="Get it on Chrome" class="px-3 py-3 md:px-6" />
            <Button variant="solidSecondary" text="Get it on Firefox" class="px-3 py-3 md:px-6" />
        </div>
    </div>
</div>