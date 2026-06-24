<script lang="ts">
    import Button from '../ui/Button.svelte';
    import * as Accordion from "../ui/accordion/index.ts";
    import { cn } from '$lib/utils';

    interface FAQProps {
        class?: string;
    }

    let { class: className = '' }: FAQProps = $props();

    let faqs = [
        {
            id: 1,
            question: 'What is Bookmark?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
        },
        {
            id: 2,
            question: 'How can I request a new browser?',
            answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
        },
        {
            id: 3,
            question: 'Is there a mobile app?',
            answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'
        },
        {
            id: 4,
            question: 'What about other Chromium browsers?',
            answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
        }
    ];
</script>

<div class={cn("flex flex-col gap-14", className)}>
    <div class="text-center max-w-80 md:max-w-lg flex flex-col gap-4 mx-auto" >
        <h1 class="text-heading text-center">Frequently Asked Questions</h1>
        <p class="text-body text-muted/70 text-center">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
    </div>

    <Accordion.Root type="single" class="max-w-xs md:max-w-lg mx-auto">
        {#each faqs as faq (faq.id)}
            <Accordion.Item value={'item-' + faq.id} class="first:border-t border-b border-muted/20 ">
                <Accordion.Trigger class="font-normal hover:text-accent hover:no-underline cursor-pointer focus-visible:ring-accent">
                    
                    {faq.question}
                </Accordion.Trigger>
                <Accordion.Content class="text-body leading-8 text-muted/70">
                    {faq.answer}
                </Accordion.Content>
            </Accordion.Item>
        {/each}
    </Accordion.Root>

    <Button variant="solid" text="More Info" class="px-6 py-3 self-center" />
</div>

<style>
    :global(.cn-accordion-trigger-icon) {
        color: blue;
    }

    :global(button[aria-expanded="true"] .cn-accordion-trigger-icon) {
        color: red;
    }
</style>