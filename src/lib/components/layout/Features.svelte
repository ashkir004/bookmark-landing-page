<script lang="ts">
    import TabMenu from "../ui/TabMenu.svelte";
    import Button from "../ui/Button.svelte";
    import featureImg1 from '$lib/assets/images/illustration-features-tab-1.svg';
    import featureImg2 from '$lib/assets/images/illustration-features-tab-2.svg';
    import featureImg3 from '$lib/assets/images/illustration-features-tab-3.svg';

    let activeTab = $state(1);

    let tabs = [
        { id: 1, label: 'Simple Bookmarking', 
            content: {
                title: 'Bookmark in one click',
                description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
            },
            featureImg: featureImg1,
        },
        { id: 2, label: 'Speedy Searching', content: {
                title: 'Intelligent search',
                description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
            },
            featureImg: featureImg2,
        },
        { id: 3, label: 'Easy Sharing', content: {
                title: 'Share your bookmarks',
                description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
            },
            featureImg: featureImg3,
        }
    ];

    function setActiveTab(tabId: number) {
        activeTab = tabId;
    }
</script>

<div class="grid grid-cols-1 grid-rows-auto gap-8 md:gap-16 lg:gap-20 mb-10
    lg:grid-cols-2 lg:grid-rows-auto
">

    <div class="flex flex-col gap-4 items-center text-center lg:col-span-full max-w-80 md:max-w-120 justify-self-center">
        <h1 class="text-heading text-secondary">Features</h1>
        <p class="text-body text-muted/70">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
    </div>

    <TabMenu class="flex flex-col md:flex-row items-center justify-center
        lg:col-span-full lg:row-start-2 lg:row-end-3
        "
            {setActiveTab}
            activeTab={activeTab}   
            tabs={tabs}
    />

    <div class="relative lg:row-start-3 lg:row-end-4 lg:justify-self-stretch
         max-h-60 mt-12"
        >
        <span class="absolute block bg-primary w-[80%] md:w-[60%] lg:w-full
            h-full top-0 left-0 rounded-r-full"></span>
        
        {#if activeTab === 1}
            <enhanced:img src={featureImg1} alt="Feature Illustration" width="288" height="216" class="ml-auto z-10 w-full h-full object-contain lg:object-right -translate-y-10" />
        {:else if activeTab === 2}
            <enhanced:img src={featureImg2} alt="Feature Illustration" width="288" height="216" class="m-auto z-10 w-full h-full object-contain lg:object-right -translate-y-10" />
        {:else if activeTab === 3}
            <enhanced:img src={featureImg3} alt="Feature Illustration" width="288" height="216" class="m-auto z-10 w-full h-full object-contain lg:object-right -translate-y-10" />
        {/if}

    </div>

    <div class="lg:row-start-3 lg:row-end-4 lg:items-start lg:text-start flex flex-col gap-4 md:gap-6 items-center justify-center text-center
        px-5 md:px-16 lg:pl-0 lg:max-w-[96%] xl:max-w-[70%]">
        <h2 class="text-heading text-secondary">{tabs.find((t) => t.id === activeTab)?.content.title}</h2>
        <p class="text-body text-muted/70">{tabs.find((t) => t.id === activeTab)?.content.description}</p>
        <Button variant="solid" text="More Info" class="px-6 py-2" />
    </div>
</div>