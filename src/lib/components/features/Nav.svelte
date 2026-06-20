<script lang="ts">
    import { cn } from "$lib/utils";
    import NavLink from "../ui/NavLink.svelte";

    type NavProps = {
        class?: string;
    }

    let {
        class: className= '',
    }: NavProps = $props();


</script>
    
<nav class={cn('', className)}>
    <ul>
        <li>
            <NavLink href="/features">Features</NavLink>
        </li>
        <li>
            <NavLink href="/pricing">Pricing</NavLink>
        </li>
        <li>
            <NavLink href="/contact">Contact</NavLink>
        </li>
    </ul>
</nav>