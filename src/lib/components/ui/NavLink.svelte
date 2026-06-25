<script lang="ts">
    import { cn } from '$lib/utils';
    import type { Snippet } from 'svelte';

    type variant = 'default' | 'inverse';
    
    type NavLinkProps = {
        href: `/${string}`;
        class?: string;
        variant?: variant;
        children?: Snippet;
    }

    let {
        href= '/',
        children,
        variant= 'default',
        class: className= ''
    }: NavLinkProps = $props();

    const variantStyles = {
        default: 'uppercase text-secondary hover:text-accent',
        inverse: 'uppercase text-white hover:text-accent'
    }
    
</script>

<a 
    class={cn(variantStyles[variant], className)}
    href={'#/' + href}
>{@render children?.()}</a>