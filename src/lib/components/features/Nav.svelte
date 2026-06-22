<script lang="ts">
    import { cn } from "$lib/utils";
    import NavLink from "../ui/NavLink.svelte";

    type NavProps = {
        class?: string;
        variant?: 'default' | 'inverse';
    }

    let {
        class: className= '',
        variant= 'default'
    }: NavProps = $props();

</script>
    
<nav class={cn('', className)}>
    <ul>
        <li class="border-t border-muted py-8">
            <NavLink href="/features" variant={variant}>Features</NavLink>
        </li>
        <li class="border-t border-muted py-8">
            <NavLink href="/pricing" variant={variant}>Pricing</NavLink>
        </li>
        <li class="border-t border-b border-muted py-8">
            <NavLink href="/contact" variant={variant}>Contact</NavLink>
        </li>
    </ul>
</nav>