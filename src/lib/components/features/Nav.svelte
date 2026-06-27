<script lang="ts">
    import { cn } from "$lib/utils";
    import NavLink from "../ui/NavLink.svelte";

    type NavProps = {
        class?: string;
        variant?: 'default' | 'inverse';
        divided?: boolean;
        toggle?: () => void;
    }

    let {
        class: className= '',
        variant= 'default',
        divided= false,
        toggle= () => {}
    }: NavProps = $props();

</script>
    
<nav>
<ul class={cn('', className)}>
    <li class="{divided ? 'border-t-2 border-surface/15 py-8' : ''}">
        <NavLink href="#features" variant={variant} toggle={toggle}>Features</NavLink>
    </li>
    <li class="{divided ? 'border-t-2 border-surface/15 py-8' : ''}">
        <NavLink href="#download" variant={variant} toggle={toggle}>Download</NavLink>
    </li>
    <li class="{divided ? 'border-t-2 border-surface/15 py-8 border-b-2' : ''}">
        <NavLink href="#contact-us" variant={variant} toggle={toggle}>Contact Us</NavLink>
    </li>
</ul>
</nav>