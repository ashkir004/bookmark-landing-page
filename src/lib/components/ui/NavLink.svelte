<script lang="ts">
    import { cn } from '$lib/utils';
    import type { Snippet } from 'svelte';
    
    type NavLinkProps = {
        href: `/${string}`;
        class?: string;
        children?: Snippet;
    }

    let {
        href= '/',
        children,
        class: className= ''
    }: NavLinkProps = $props();
    
</script>

<a 
    class={cn('text-secondary hover:text-accent', className)}
    href={'#/' + href}
>{@render children?.()}</a>