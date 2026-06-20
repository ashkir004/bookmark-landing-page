<script lang="ts">
    import hamburgerIcon from '$lib/assets/images/icon-hamburger.svg';
    import closeIcon from '$lib/assets/images/icon-close.svg';
    import { cn } from '$lib/utils';

    type MenuControls = {
        class?: string;
        isOpen?: boolean;
        toggle?: () => void;
    }

    let {
        class: className= '',
        isOpen= false,
        toggle,
    }: MenuControls = $props();


</script>

<button class={cn('cursor-pointer', className)} onclick={toggle}>
    <img src={isOpen ? closeIcon : hamburgerIcon} alt="Menu" />
</button>