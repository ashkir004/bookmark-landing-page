<script lang="ts">
    import { cn } from "$lib/utils";
    import NavLink from "../ui/NavLink.svelte";

    type NavProps = {
        class?: string;
        variant?: 'default' | 'inverse';
        divided?: boolean;
    }

    let {
        class: className= '',
        variant= 'default',
        divided= false,
    }: NavProps = $props();

</script>
    
<nav>
<ul class={cn('', className)}>
    <li class="{divided ? 'border-t-2 border-surface/15 py-8' : ''}">
        <NavLink href="#features" variant={variant}>Features</NavLink>
    </li>
    <li class="{divided ? 'border-t-2 border-surface/15 py-8' : ''}">
        <NavLink href="#download" variant={variant}>Download</NavLink>
    </li>
    <li class="{divided ? 'border-t-2 border-surface/15 py-8 border-b-2' : ''}">
        <NavLink href="#contact-us" variant={variant}>Contact Us</NavLink>
    </li>
</ul>
</nav>