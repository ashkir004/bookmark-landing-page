<script lang="ts">
    import { cn } from "$lib/utils";

    type Variant = 'solid' | 'outline' | 'accent';

    interface ButtonProps {
        variant?: Variant;
        class?: string;
        disabled?: boolean;
        text?: string;
    }

    let {
        variant= 'solid',
        class: className= '',
        disabled= false,
        text= 'Button'
    }: ButtonProps = $props();

    const variants = {
        solid: { 
            default: `bg-primary text-white shadow-button cursor-pointer hover:bg-surface hover:text-primary hover:border hover:border-primary`,
            disabled: `bg-surface text-muted shadow-button/10 cursor-not-allowed`
         },
        outline: { 
            default: `border-2 border-white bg-transparent text-white cursor-pointer`,
            disabled: `border border-2 border-muted text-muted bg-surface cursor-not-allowed`
        },
        accent: {
            default: `bg-accent text-white shadow-button cursor-pointer
                        hover:bg-surface hover:text-accent hover:border hover:border-2`,
            disabled: `bg-surface text-muted shadow-button/10 cursor-not-allowed`
        } 
    };

</script>

<button
    disabled={disabled}
    class={cn(`inline-flex items-center justify-center rounded-md px-8 py-3`,
        variants[variant][disabled ? 'disabled' : 'default'],
        className
    )}
>
    {text}
</button>