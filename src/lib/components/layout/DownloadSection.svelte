<script lang="ts">
    import logoChrome from '$lib/assets/images/logo-chrome.svg';
    import logoFirefox from '$lib/assets/images/logo-firefox.svg';
    import logoOpera from '$lib/assets/images/logo-opera.svg';
    import dropDivider from '$lib/assets/images/bg-dots.svg';
    import Card from '../ui/Card.svelte';
    import Button from '../ui/Button.svelte'

    let downloadCards = [
        {
            id: 1,
            logo: logoChrome,
            title: 'Add to Chrome',
            description: 'Minimum version 62',
            buttonText: 'Add & Install Extension',
        },
        {
            id: 2,
            logo: logoFirefox,
            title: 'Add to Firefox',
            description: 'Minimum version 55',
            buttonText: 'Add & Install Extension',
        },
        {
            id: 3,
            logo: logoOpera,
            title: 'Add to Opera',
            description: 'Minimum version 46',
            buttonText: 'Add & Install Extension',
        }
    ];

</script>

<section class="flex flex-col gap-10 md:gap-16 lg:gap-12 items-center">
    <div class="text-center max-w-80 md:max-w-130 flex flex-col gap-4">
        <h2 class="text-heading text-secondary text-center">Download the extension</h2>
        <p class="text-body text-muted/70 text-center">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
    </div>
    <div class="flex flex-col gap-10 md:gap-2 lg:gap-8 items-center
        md:flex-row md:justify-center">
        {#each downloadCards as card (card.id)}
            <Card class="flex flex-col gap-6 lg:gap-8 shadow-lg py-8 md:py-6 lg:py-8
                {card.id === 2 ? 'lg:translate-y-8' : card.id === 3 ? 'lg:translate-y-16' : ''} ">
                <div>
                    <img src={card.logo} alt={card.title + ' logo'} class="mx-auto mb-6" />
                    <h3 class="text-heading text-secondary text-center mb-4">{card.title}</h3>
                    <p class="text-body text-muted/70 text-center mb-6">{card.description}</p>
                </div>
                <img src={dropDivider} alt="divider" />
                <Button variant="solid" text={card.buttonText} class="px-8 py-4 self-center" />
            </Card>
        {/each}
    </div>
</section>