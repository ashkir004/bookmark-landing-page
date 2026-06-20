<script lang="ts">
    import Button from "$lib/components/ui/Button.svelte";
</script>

<div class="inner-container flex flex-col items-center justify-center h-screen gap-6 text-center">
    <Button variant="solid" text="Get it on Chrome" />
    <Button variant="outline" text="Get it on Firefox" />

    <Button variant="solid" text="Disabled Button" disabled={true} />
    <Button variant="outline" text="Disabled Button" disabled={true} />
</div>
