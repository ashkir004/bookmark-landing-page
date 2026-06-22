<script lang="ts">
    // import Button from "$lib/components/ui/Button.svelte";
    // import Card from "$lib/components/ui/Card.svelte";
    // import Logo from "$lib/components/features/Logo.svelte";
	// import MenuControls from "$lib/components/ui/MenuControls.svelte";
    // import Nav from "$lib/components/features/Nav.svelte";
	// import SocialsLink from "$lib/components/features/SocialsLink.svelte";
    import Navbar from "$lib/components/layout/Navbar.svelte";
    import Hero from "$lib/components/layout/Hero.svelte";
</script>

<Navbar />
<Hero />

<!-- <div class="inner-container flex flex-col items-center justify-center h-screen gap-6 text-center">
    <Logo/>
    <Nav></Nav>
    <MenuControls />
    <Card class="bg-secondary p-6">
        <Logo variant="dark" />
        <Nav variant="inverse"></Nav>
    </Card>
    <Card class="p-6 bg-secondary flex flex-col items-center gap-4">
        <SocialsLink href="https://www.facebook.com" platform="facebook" />
        <SocialsLink href="https://twitter.com" platform="twitter" />
    </Card>
    <Card class="p-6 shadow-lg">
        <Button variant="solid" text="Get it on Chrome" />
        <Button variant="outline" text="Get it on Firefox" />
        <Button variant="accent" text="Login" />
    </Card>

    <Button variant="solid" text="Disabled Button" disabled={true} />
    <Button variant="outline" text="Disabled Button" disabled={true} />
</div> -->
