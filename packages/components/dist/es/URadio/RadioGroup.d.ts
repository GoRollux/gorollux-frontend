import { RadioGroupProps } from 'naive-ui';
export declare type URadioGroupPropsType = RadioGroupProps;
declare const URadioGroup: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    readonly name: StringConstructor;
    readonly value: import("vue").PropType<string | number | boolean | null>;
    readonly defaultValue: {
        readonly type: import("vue").PropType<string | number | boolean | null>;
        readonly default: null;
    };
    readonly size: import("vue").PropType<"small" | "medium" | "large">;
    readonly disabled: {
        readonly type: import("vue").PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly 'onUpdate:value': import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<import("naive-ui/es/radio/src/interface").OnUpdateValue>>;
    readonly onUpdateValue: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<import("naive-ui/es/radio/src/interface").OnUpdateValue>>;
    readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Radio", {
        labelLineHeight: string;
        buttonHeightSmall: string;
        buttonHeightMedium: string;
        buttonHeightLarge: string;
        fontSizeSmall: string;
        fontSizeMedium: string;
        fontSizeLarge: string;
        boxShadow: string;
        boxShadowActive: string;
        boxShadowFocus: string;
        boxShadowHover: string;
        boxShadowDisabled: string;
        color: string;
        colorDisabled: string;
        colorActive: string;
        textColor: string;
        textColorDisabled: string;
        dotColorActive: string;
        dotColorDisabled: string;
        buttonBorderColor: string;
        buttonBorderColorActive: string;
        buttonBorderColorHover: string;
        buttonColor: string;
        buttonColorActive: string;
        buttonTextColor: string;
        buttonTextColorActive: string;
        buttonTextColorHover: string;
        opacityDisabled: string;
        buttonBoxShadowFocus: string;
        buttonBoxShadowHover: string;
        buttonBoxShadow: string;
        buttonBorderRadius: string;
        radioSizeSmall: string;
        radioSizeMedium: string;
        radioSizeLarge: string;
        labelPadding: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Radio", {
        labelLineHeight: string;
        buttonHeightSmall: string;
        buttonHeightMedium: string;
        buttonHeightLarge: string;
        fontSizeSmall: string;
        fontSizeMedium: string;
        fontSizeLarge: string;
        boxShadow: string;
        boxShadowActive: string;
        boxShadowFocus: string;
        boxShadowHover: string;
        boxShadowDisabled: string;
        color: string;
        colorDisabled: string;
        colorActive: string;
        textColor: string;
        textColorDisabled: string;
        dotColorActive: string;
        dotColorDisabled: string;
        buttonBorderColor: string;
        buttonBorderColorActive: string;
        buttonBorderColorHover: string;
        buttonColor: string;
        buttonColorActive: string;
        buttonTextColor: string;
        buttonTextColorActive: string;
        buttonTextColorHover: string;
        opacityDisabled: string;
        buttonBoxShadowFocus: string;
        buttonBoxShadowHover: string;
        buttonBoxShadow: string;
        buttonBorderRadius: string;
        radioSizeSmall: string;
        radioSizeMedium: string;
        radioSizeLarge: string;
        labelPadding: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Radio", {
        labelLineHeight: string;
        buttonHeightSmall: string;
        buttonHeightMedium: string;
        buttonHeightLarge: string;
        fontSizeSmall: string;
        fontSizeMedium: string;
        fontSizeLarge: string;
        boxShadow: string;
        boxShadowActive: string;
        boxShadowFocus: string;
        boxShadowHover: string;
        boxShadowDisabled: string;
        color: string;
        colorDisabled: string;
        colorActive: string;
        textColor: string;
        textColorDisabled: string;
        dotColorActive: string;
        dotColorDisabled: string;
        buttonBorderColor: string;
        buttonBorderColorActive: string;
        buttonBorderColorHover: string;
        buttonColor: string;
        buttonColorActive: string;
        buttonTextColor: string;
        buttonTextColorActive: string;
        buttonTextColorHover: string;
        opacityDisabled: string;
        buttonBoxShadowFocus: string;
        buttonBoxShadowHover: string;
        buttonBoxShadow: string;
        buttonBorderRadius: string;
        radioSizeSmall: string;
        radioSizeMedium: string;
        radioSizeLarge: string;
        labelPadding: string;
    }, any>>>;
}, {
    selfElRef: import("vue").Ref<HTMLDivElement | null>;
    rtlEnabled: import("vue").Ref<import("naive-ui/es/config-provider/src/internal-interface").RtlItem | undefined> | undefined;
    mergedClsPrefix: import("vue").ComputedRef<string>;
    mergedValue: import("vue").ComputedRef<string | number | boolean | null>;
    handleFocusout: (e: FocusEvent) => void;
    handleFocusin: (e: FocusEvent) => void;
    cssVars: import("vue").ComputedRef<{
        '--n-font-size': string;
        '--n-bezier': string;
        '--n-button-border-color': string;
        '--n-button-border-color-active': string;
        '--n-button-border-radius': string;
        '--n-button-box-shadow': string;
        '--n-button-box-shadow-focus': string;
        '--n-button-box-shadow-hover': string;
        '--n-button-color-active': string;
        '--n-button-text-color': string;
        '--n-button-text-color-hover': string;
        '--n-button-text-color-active': string;
        '--n-height': string;
        '--n-opacity-disabled': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly name: StringConstructor;
    readonly value: import("vue").PropType<string | number | boolean | null>;
    readonly defaultValue: {
        readonly type: import("vue").PropType<string | number | boolean | null>;
        readonly default: null;
    };
    readonly size: import("vue").PropType<"small" | "medium" | "large">;
    readonly disabled: {
        readonly type: import("vue").PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly 'onUpdate:value': import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<import("naive-ui/es/radio/src/interface").OnUpdateValue>>;
    readonly onUpdateValue: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<import("naive-ui/es/radio/src/interface").OnUpdateValue>>;
    readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Radio", {
        labelLineHeight: string;
        buttonHeightSmall: string;
        buttonHeightMedium: string;
        buttonHeightLarge: string;
        fontSizeSmall: string;
        fontSizeMedium: string;
        fontSizeLarge: string;
        boxShadow: string;
        boxShadowActive: string;
        boxShadowFocus: string;
        boxShadowHover: string;
        boxShadowDisabled: string;
        color: string;
        colorDisabled: string;
        colorActive: string;
        textColor: string;
        textColorDisabled: string;
        dotColorActive: string;
        dotColorDisabled: string;
        buttonBorderColor: string;
        buttonBorderColorActive: string;
        buttonBorderColorHover: string;
        buttonColor: string;
        buttonColorActive: string;
        buttonTextColor: string;
        buttonTextColorActive: string;
        buttonTextColorHover: string;
        opacityDisabled: string;
        buttonBoxShadowFocus: string;
        buttonBoxShadowHover: string;
        buttonBoxShadow: string;
        buttonBorderRadius: string;
        radioSizeSmall: string;
        radioSizeMedium: string;
        radioSizeLarge: string;
        labelPadding: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Radio", {
        labelLineHeight: string;
        buttonHeightSmall: string;
        buttonHeightMedium: string;
        buttonHeightLarge: string;
        fontSizeSmall: string;
        fontSizeMedium: string;
        fontSizeLarge: string;
        boxShadow: string;
        boxShadowActive: string;
        boxShadowFocus: string;
        boxShadowHover: string;
        boxShadowDisabled: string;
        color: string;
        colorDisabled: string;
        colorActive: string;
        textColor: string;
        textColorDisabled: string;
        dotColorActive: string;
        dotColorDisabled: string;
        buttonBorderColor: string;
        buttonBorderColorActive: string;
        buttonBorderColorHover: string;
        buttonColor: string;
        buttonColorActive: string;
        buttonTextColor: string;
        buttonTextColorActive: string;
        buttonTextColorHover: string;
        opacityDisabled: string;
        buttonBoxShadowFocus: string;
        buttonBoxShadowHover: string;
        buttonBoxShadow: string;
        buttonBorderRadius: string;
        radioSizeSmall: string;
        radioSizeMedium: string;
        radioSizeLarge: string;
        labelPadding: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Radio", {
        labelLineHeight: string;
        buttonHeightSmall: string;
        buttonHeightMedium: string;
        buttonHeightLarge: string;
        fontSizeSmall: string;
        fontSizeMedium: string;
        fontSizeLarge: string;
        boxShadow: string;
        boxShadowActive: string;
        boxShadowFocus: string;
        boxShadowHover: string;
        boxShadowDisabled: string;
        color: string;
        colorDisabled: string;
        colorActive: string;
        textColor: string;
        textColorDisabled: string;
        dotColorActive: string;
        dotColorDisabled: string;
        buttonBorderColor: string;
        buttonBorderColorActive: string;
        buttonBorderColorHover: string;
        buttonColor: string;
        buttonColorActive: string;
        buttonTextColor: string;
        buttonTextColorActive: string;
        buttonTextColorHover: string;
        opacityDisabled: string;
        buttonBoxShadowFocus: string;
        buttonBoxShadowHover: string;
        buttonBoxShadow: string;
        buttonBorderRadius: string;
        radioSizeSmall: string;
        radioSizeMedium: string;
        radioSizeLarge: string;
        labelPadding: string;
    }, any>>>;
}>>, {
    readonly disabled: boolean | undefined;
    readonly defaultValue: string | number | boolean | null;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default URadioGroup;
