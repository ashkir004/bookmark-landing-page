<script lang="ts">
    import { cn } from "$lib/utils";

    type Variant = 'solid' | 'outline' | 'accent' | 'solidSecondary';

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
        solidSecondary: {
            default: `bg-muted/10 text-muted font-semiBold shadow-button/10 cursor-pointer hover:bg-surface hover:text-muted hover:border hover:border-muted`,
            disabled: `bg-surface text-muted shadow-button/10 cursor-not-allowed`,
        },
        outline: { 
            default: `border-2 border-white bg-transparent text-white cursor-pointer hover:text-primary hover:bg-surface`,
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
    class={cn(`inline-flex items-center justify-center rounded-md`,
        variants[variant][disabled ? 'disabled' : 'default'],
        className
    )}
>
    {text}
</button>