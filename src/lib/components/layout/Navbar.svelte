<script lang="ts">
    import Logo from "../features/Logo.svelte";
    import Nav from "../features/Nav.svelte";
    import Button from "../ui/Button.svelte";
    import Menu from "../features/Menu.svelte";
	import MenuControls from "../ui/MenuControls.svelte";
    import { cn } from "$lib/utils";

    interface NavbarProps {
        class?: string;
    }

    let { class: className = '' }: NavbarProps = $props();

    let menuOpen = $state(false);

    function toggle() {
        menuOpen = !menuOpen;
    }
</script>
<!-- px-6 md:px-16 -->
<div class={cn(`grid grid-cols-1 grid-rows-1`, className)}>
    <div class="col-span-full row-span-full flex flex-row items-center justify-start lg:justify-start py-8">
        
        <Logo class={menuOpen ? 'hidden' : 'block ml-6 md:ml-16 lg:m-0 lg:min-w-max'} />
        
        <div class="flex flex-row items-center justify-end gap-12 lg:w-full">
            <Nav class="hidden lg:flex lg:flex-row gap-12" />
            <Button variant="accent" text="Login" class="hidden lg:block px-8 py-2 min-w-28" />
        </div>
        
        <MenuControls isOpen={menuOpen} toggle={toggle} class="lg:hidden ml-auto mr-6 md:mr-15 {menuOpen ? 'hidden' : ''}" />
    </div>
    <Menu 
        isOpen={menuOpen} 
        class="lg:hidden {!menuOpen ? 'hidden' : ''} px-6 md:px-16 py-8 col-span-full row-span-full uppercase" 
        toggle={toggle} />
</div>