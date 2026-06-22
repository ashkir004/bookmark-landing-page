<script lang="ts">
    import TabMenu from "../ui/TabMenu.svelte";

    let activeTab = $state(1);

    function setActiveTab(tabId: number) {
        activeTab = tabId;
    }
</script>

<div>
    <TabMenu class="flex flex-col"
            {setActiveTab}
            activeTab={activeTab}   
            tabs={[
                { id: 1, label: 'Simple Bookmarking'},
                { id: 2, label: 'Speedy Searching'},
                { id: 3, label: 'Easy Sharing'}
            ]}
    />
</div>