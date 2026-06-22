<script lang="ts">
    import { cn } from "$lib/utils";
    import Button from "./Button.svelte";

    type TabsProps = {
        class?: string;
        tabs?: Array<{ id: number; label: string; }>;
        setActiveTab?: (tabId: number) => void;
        activeTab?: number;
    }

    let {
        class: className= '',
        tabs= [],
        setActiveTab = () => 1,
        activeTab = 1,
    }: TabsProps = $props();

</script>


<ul class={cn('md:max-w-max md:justify-self-center md:border-y-2 md:border-muted/10', className)}>
    {#each tabs as tab (tab.id)}
        <li class="flex flex-row items-stretch justify-center border-t-2 last:border-b-2 md:border-none border-muted/10">
            <Button 
                class="py-6 w-48 border-b-2 border-transparent 
                    focus-visible:outline-none focus-visible:text-accent
                    hover:text-accent {tab.id === activeTab && activeTab !== undefined ? 'border-b-2 border-b-accent rounded-none text-secondary' : ''}"
                variant="ghost" 
                text={tab.label} 
                onclick={() => setActiveTab(tab.id)}  
            />
        </li>
    {/each}
</ul>
