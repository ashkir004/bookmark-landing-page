<script lang="ts">
    import { cn } from '$lib/utils';
	import type { PageProps } from '../../../routes/$types';
    import { enhance } from '$app/forms';
    import Button from '../ui/Button.svelte';
    import CircleAlert from '@lucide/svelte/icons/circle-alert';

    interface CTAProps {
        class?: string;
        form?: PageProps['form'];
    }

    let { class: className = '', form }: CTAProps = $props();

</script>

<div class="{cn('bg-primary text-surface flex flex-col items-center gap-6 md:gap-8 text-center py-12', className)}">
    <div class="flex flex-col gap-2 md:gap-4 max-w-sm md:max-w-md">
        <p class="text-eyebrow">35,000+ already joined</p>
        <h1 class="text-heading">Stay up-to-date with what we're doing</h1>
    </div>
    <form method="POST" novalidate use:enhance
        class="w-full flex flex-col gap-4 md:justify-stretch md:flex-row md:items-start md:gap-4 max-w-xs md:max-w-md">
        <div class="relative rounded-md mx-2 grow md:mx-0 flex flex-col
            {form?.error ? 'bg-accent text-surface border-2 border-accent' : 'bg-surface'}">
            <input 
                type="email" id="cta-email" 
                name="email" placeholder="Enter your email address" autocomplete="email" required
                class="w-full border-none 
                        rounded-md py-2 px-3 
                        focus:outline-none focus:ring-2 focus:ring-accent
                        placeholder:text-muted/70 text-body text-muted" 
            />
            {#if form?.error}<p class="text-caption text-start px-2">{form.error}</p>{/if}
            {#if form?.error} 
                <CircleAlert class="text-surface fill-accent w-7 h-7 absolute top-0 right-0 m-2 z-50" />
            {/if}
        </div>
        <Button variant="accent" text="Contact Us" 
                class="px-6 py-2 mx-2 md:mx-0" />

    </form>
</div>