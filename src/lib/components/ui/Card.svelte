<script lang="ts">
    import type { Snippet } from "svelte";
    import { cn } from "$lib/utils";

    type CardProps = {
        class?: string;
        children?: Snippet;
    }

    let {
        class: className= '', 
        children
    }: CardProps = $props();

    const baseCardClasses = `bg-background rounded-lg`;

</script>

<div class={cn(baseCardClasses, className)}>

    {@render children?.()}

</div>