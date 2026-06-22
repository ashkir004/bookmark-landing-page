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

<div class="flex flex-row items-center justify-between">

    <Logo class={menuOpen ? 'hidden' : 'block'} />

    <div class="flex flex-row items-center justify-between gap-12">
        <Nav class="hidden lg:flex gap-12" />
        <Button variant="accent" text="Login" class="hidden lg:block" />
    </div>

    <MenuControls isOpen={menuOpen} toggle={toggle} class="lg:hidden {menuOpen ? 'hidden' : ''}" />
    <Menu 
        isOpen={menuOpen} 
        class="lg:hidden {!menuOpen ? 'hidden' : ''}" 
        toggle={toggle} />
</div>