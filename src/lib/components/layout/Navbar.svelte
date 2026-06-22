<script lang="ts">
    import Logo from "../features/Logo.svelte";
    import Nav from "../features/Nav.svelte";
    import Button from "../ui/Button.svelte";
    import Menu from "../features/Menu.svelte";
	import MenuControls from "../ui/MenuControls.svelte";

    let menuOpen = $state(false);

    function toggle() {
        menuOpen = !menuOpen;
    }
</script>

<div class="grid grid-cols-1 grid-rows-1">
    <div class="col-span-full row-span-full flex flex-row items-center justify-between px-6 md:px-16 py-8">
        
        <Logo class={menuOpen ? 'hidden' : 'block'} />
        
        <div class="flex flex-row items-center justify-between gap-12">
            <Nav class="hidden lg:flex gap-12" />
            <Button variant="accent" text="Login" class="hidden lg:block" />
        </div>
        
        <MenuControls isOpen={menuOpen} toggle={toggle} class="lg:hidden {menuOpen ? 'hidden' : ''}" />
    </div>
    <Menu 
        isOpen={menuOpen} 
        class="lg:hidden {!menuOpen ? 'hidden' : ''} px-6 md:px-16 py-8 col-span-full row-span-full uppercase" 
        toggle={toggle} />
</div>