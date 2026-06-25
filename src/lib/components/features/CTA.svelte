<script lang="ts">
    import { cn } from '$lib/utils';
    import Button from '../ui/Button.svelte';

    interface CTAProps {
        class?: string;
    }

    let { class: className = '' }: CTAProps = $props();

</script>

<div class="{cn('bg-primary text-surface flex flex-col items-center gap-6 md:gap-8 text-center py-12', className)}">
    <div class="flex flex-col gap-2 md:gap-4 max-w-sm md:max-w-md">
        <p class="text-eyebrow">35,000+ already joined</p>
        <h1 class="text-heading">Stay up-to-date with what we're doing</h1>
    </div>
    <form class="w-full flex flex-col gap-4 md:items-center md:justify-stretch md:flex-row md:gap-4 max-w-xs md:max-w-md">
        <input 
                type="email" id="cta-email" 
                name="email" placeholder="Enter your email address" autocomplete="email" required
                class="grow border-none 
                        rounded-md py-2 px-3 
                        focus:outline-none focus:ring-2 focus:ring-accent
                        placeholder:text-muted/70 text-body text-muted" 
        />
        <Button variant="accent" text="Contact Us" 
                class="px-6 py-2" />
    </form>
</div>