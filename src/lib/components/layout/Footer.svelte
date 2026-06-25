<script lang="ts">
    import { cn } from "$lib/utils";
    import Logo from "$lib/components/features/Logo.svelte";
    import Nav from "../features/Nav.svelte";
    import SocialsLink from "../features/SocialsLink.svelte";

    interface FooterProps {
        class?: string;
    }

    let { class: className = '' }: FooterProps = $props();
</script>

<div class={cn(``, className)}>
    <Logo variant="dark" />
    <Nav variant="inverse" divided={false} class="flex flex-col md:flex-row gap-6" />
    <div class="socials col-span-2 flex flex-row gap-10 self-center mt-auto lg:ml-auto">
        <SocialsLink href="https://www.facebook.com" platform="facebook"/>
        <SocialsLink href="https://twitter.com" platform="twitter" />
    </div>
</div>