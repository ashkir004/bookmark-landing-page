<script lang="ts">
	import { cn } from "$lib/utils";
	import MenuControls from "../ui/MenuControls.svelte";
    import Nav from "./Nav.svelte";
    import Logo from "./Logo.svelte";
    import Button from "../ui/Button.svelte";
	import SocialsLink from "./SocialsLink.svelte";

    
    type MenuProps = {
        class?: string;
        isOpen?: boolean;
        toggle?: () => void;
    }

    let {
        class: className= '',
        isOpen= false,
        toggle,
    }: MenuProps = $props();

</script>
<div class={cn('w-screen h-screen bg-primary/95 flex flex-col gap-10', className)}>
    <div class="flex flex-row justify-between items-center">
        <Logo variant="dark" class="" />
        <MenuControls isOpen={isOpen} toggle={toggle} class="lg:hidden  justify-self-end self-start" />
    </div>
    {#if isOpen}
        <Nav class="justify-items-stretch text-center text-surface" 
            variant="inverse" />
    {/if}
    <Button variant="outline" text="Login" class="justify-items-stretch items-center uppercase" />

    <div class="socials col-span-2 flex flex-row gap-10 self-center mt-auto">
        <SocialsLink href="https://www.facebook.com" platform="facebook"/>
        <SocialsLink href="https://twitter.com" platform="twitter" />
    </div>
</div>