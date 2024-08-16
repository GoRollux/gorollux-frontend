declare const UFormItem: import("vue").DefineComponent<{
    readonly label: StringConstructor;
    readonly labelWidth: import("vue").PropType<string | number>;
    readonly labelStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    readonly labelAlign: import("vue").PropType<import("naive-ui/es/form/src/interface").LabelAlign>;
    readonly labelPlacement: import("vue").PropType<import("naive-ui/es/form/src/interface").LabelPlacement>;
    readonly path: StringConstructor;
    readonly first: BooleanConstructor;
    readonly rulePath: StringConstructor;
    readonly required: BooleanConstructor;
    readonly showRequireMark: {
        readonly type: import("vue").PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly requireMarkPlacement: import("vue").PropType<"right" | "left" | "right-hanging">;
    readonly showFeedback: {
        readonly type: import("vue").PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly rule: import("vue").PropType<import("naive-ui").FormItemRule | import("naive-ui").FormItemRule[]>;
    readonly size: import("vue").PropType<"small" | "medium" | "large">;
    readonly ignorePathChange: BooleanConstructor;
    readonly validationStatus: import("vue").PropType<"success" | "warning" | "error">;
    readonly feedback: StringConstructor;
    readonly showLabel: {
        readonly type: import("vue").PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly labelProps: import("vue").PropType<import("vue").LabelHTMLAttributes>;
    readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Form", {
        blankHeightSmall: string;
        blankHeightMedium: string;
        blankHeightLarge: string;
        lineHeight: string;
        labelTextColor: string;
        asteriskColor: string;
        feedbackTextColorError: string;
        feedbackTextColorWarning: string;
        feedbackTextColor: string;
        feedbackPadding: string;
        feedbackHeightSmall: string;
        feedbackHeightMedium: string;
        feedbackHeightLarge: string;
        feedbackFontSizeSmall: string;
        feedbackFontSizeMedium: string;
        feedbackFontSizeLarge: string;
        labelFontSizeLeftSmall: string;
        labelFontSizeLeftMedium: string;
        labelFontSizeLeftLarge: string;
        labelFontSizeTopSmall: string;
        labelFontSizeTopMedium: string;
        labelFontSizeTopLarge: string;
        labelHeightSmall: string;
        labelHeightMedium: string;
        labelHeightLarge: string;
        labelPaddingVertical: string;
        labelPaddingHorizontal: string;
        labelTextAlignVertical: string;
        labelTextAlignHorizontal: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Form", {
        blankHeightSmall: string;
        blankHeightMedium: string;
        blankHeightLarge: string;
        lineHeight: string;
        labelTextColor: string;
        asteriskColor: string;
        feedbackTextColorError: string;
        feedbackTextColorWarning: string;
        feedbackTextColor: string;
        feedbackPadding: string;
        feedbackHeightSmall: string;
        feedbackHeightMedium: string;
        feedbackHeightLarge: string;
        feedbackFontSizeSmall: string;
        feedbackFontSizeMedium: string;
        feedbackFontSizeLarge: string;
        labelFontSizeLeftSmall: string;
        labelFontSizeLeftMedium: string;
        labelFontSizeLeftLarge: string;
        labelFontSizeTopSmall: string;
        labelFontSizeTopMedium: string;
        labelFontSizeTopLarge: string;
        labelHeightSmall: string;
        labelHeightMedium: string;
        labelHeightLarge: string;
        labelPaddingVertical: string;
        labelPaddingHorizontal: string;
        labelTextAlignVertical: string;
        labelTextAlignHorizontal: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Form", {
        blankHeightSmall: string;
        blankHeightMedium: string;
        blankHeightLarge: string;
        lineHeight: string;
        labelTextColor: string;
        asteriskColor: string;
        feedbackTextColorError: string;
        feedbackTextColorWarning: string;
        feedbackTextColor: string;
        feedbackPadding: string;
        feedbackHeightSmall: string;
        feedbackHeightMedium: string;
        feedbackHeightLarge: string;
        feedbackFontSizeSmall: string;
        feedbackFontSizeMedium: string;
        feedbackFontSizeLarge: string;
        labelFontSizeLeftSmall: string;
        labelFontSizeLeftMedium: string;
        labelFontSizeLeftLarge: string;
        labelFontSizeTopSmall: string;
        labelFontSizeTopMedium: string;
        labelFontSizeTopLarge: string;
        labelHeightSmall: string;
        labelHeightMedium: string;
        labelHeightLarge: string;
        labelPaddingVertical: string;
        labelPaddingHorizontal: string;
        labelTextAlignVertical: string;
        labelTextAlignHorizontal: string;
    }, any>>>;
}, {
    cssVars: import("vue").ComputedRef<{
        '--n-bezier': string;
        '--n-line-height': string;
        '--n-blank-height': string;
        '--n-label-font-size': string;
        '--n-label-text-align': string;
        '--n-label-height': string;
        '--n-label-padding': string;
        '--n-asterisk-color': string;
        '--n-label-text-color': string;
        '--n-feedback-padding': string;
        '--n-feedback-font-size': string;
        '--n-feedback-height': string;
        '--n-feedback-text-color': string;
        '--n-feedback-text-color-warning': string;
        '--n-feedback-text-color-error': string;
    }> | undefined;
    themeClass: import("vue").Ref<string>;
    onRender: () => void;
    validate: import("naive-ui/es/form/src/interface").FormItemValidate;
    restoreValidation: () => void;
    path?: string | undefined;
    internalValidate: import("naive-ui/es/form/src/interface").FormItemInternalValidate;
    mergedSize: import("vue").ComputedRef<import("naive-ui/es/form/src/interface").Size>;
    validationErrored: import("vue").Ref<boolean>;
    mergedLabelStyle: import("vue").ComputedRef<(import("vue").StyleValue | undefined)[]>;
    mergedLabelPlacement: import("vue").ComputedRef<import("naive-ui/es/form/src/interface").LabelPlacement>;
    mergedLabelAlign: import("vue").ComputedRef<import("naive-ui/es/form/src/interface").LabelAlign | undefined>;
    mergedShowRequireMark: import("vue").ComputedRef<boolean | undefined>;
    mergedRequireMarkPlacement: import("vue").ComputedRef<"right" | "left" | "right-hanging">;
    mergedValidationStatus: import("vue").ComputedRef<"success" | "warning" | "error" | undefined>;
    mergedShowFeedback: import("vue").ComputedRef<boolean>;
    mergedShowLabel: import("vue").ComputedRef<boolean>;
    isAutoLabelWidth: import("vue").ComputedRef<boolean>;
    labelElementRef: import("vue").Ref<HTMLLabelElement | null>;
    mergedClsPrefix: import("vue").ComputedRef<string>;
    mergedRequired: import("vue").ComputedRef<boolean>;
    feedbackId: import("vue").Ref<string>;
    renderExplains: import("vue").Ref<{
        key: string;
        render: () => import("vue").VNodeChild;
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly label: StringConstructor;
    readonly labelWidth: import("vue").PropType<string | number>;
    readonly labelStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    readonly labelAlign: import("vue").PropType<import("naive-ui/es/form/src/interface").LabelAlign>;
    readonly labelPlacement: import("vue").PropType<import("naive-ui/es/form/src/interface").LabelPlacement>;
    readonly path: StringConstructor;
    readonly first: BooleanConstructor;
    readonly rulePath: StringConstructor;
    readonly required: BooleanConstructor;
    readonly showRequireMark: {
        readonly type: import("vue").PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly requireMarkPlacement: import("vue").PropType<"right" | "left" | "right-hanging">;
    readonly showFeedback: {
        readonly type: import("vue").PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly rule: import("vue").PropType<import("naive-ui").FormItemRule | import("naive-ui").FormItemRule[]>;
    readonly size: import("vue").PropType<"small" | "medium" | "large">;
    readonly ignorePathChange: BooleanConstructor;
    readonly validationStatus: import("vue").PropType<"success" | "warning" | "error">;
    readonly feedback: StringConstructor;
    readonly showLabel: {
        readonly type: import("vue").PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly labelProps: import("vue").PropType<import("vue").LabelHTMLAttributes>;
    readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Form", {
        blankHeightSmall: string;
        blankHeightMedium: string;
        blankHeightLarge: string;
        lineHeight: string;
        labelTextColor: string;
        asteriskColor: string;
        feedbackTextColorError: string;
        feedbackTextColorWarning: string;
        feedbackTextColor: string;
        feedbackPadding: string;
        feedbackHeightSmall: string;
        feedbackHeightMedium: string;
        feedbackHeightLarge: string;
        feedbackFontSizeSmall: string;
        feedbackFontSizeMedium: string;
        feedbackFontSizeLarge: string;
        labelFontSizeLeftSmall: string;
        labelFontSizeLeftMedium: string;
        labelFontSizeLeftLarge: string;
        labelFontSizeTopSmall: string;
        labelFontSizeTopMedium: string;
        labelFontSizeTopLarge: string;
        labelHeightSmall: string;
        labelHeightMedium: string;
        labelHeightLarge: string;
        labelPaddingVertical: string;
        labelPaddingHorizontal: string;
        labelTextAlignVertical: string;
        labelTextAlignHorizontal: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Form", {
        blankHeightSmall: string;
        blankHeightMedium: string;
        blankHeightLarge: string;
        lineHeight: string;
        labelTextColor: string;
        asteriskColor: string;
        feedbackTextColorError: string;
        feedbackTextColorWarning: string;
        feedbackTextColor: string;
        feedbackPadding: string;
        feedbackHeightSmall: string;
        feedbackHeightMedium: string;
        feedbackHeightLarge: string;
        feedbackFontSizeSmall: string;
        feedbackFontSizeMedium: string;
        feedbackFontSizeLarge: string;
        labelFontSizeLeftSmall: string;
        labelFontSizeLeftMedium: string;
        labelFontSizeLeftLarge: string;
        labelFontSizeTopSmall: string;
        labelFontSizeTopMedium: string;
        labelFontSizeTopLarge: string;
        labelHeightSmall: string;
        labelHeightMedium: string;
        labelHeightLarge: string;
        labelPaddingVertical: string;
        labelPaddingHorizontal: string;
        labelTextAlignVertical: string;
        labelTextAlignHorizontal: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Form", {
        blankHeightSmall: string;
        blankHeightMedium: string;
        blankHeightLarge: string;
        lineHeight: string;
        labelTextColor: string;
        asteriskColor: string;
        feedbackTextColorError: string;
        feedbackTextColorWarning: string;
        feedbackTextColor: string;
        feedbackPadding: string;
        feedbackHeightSmall: string;
        feedbackHeightMedium: string;
        feedbackHeightLarge: string;
        feedbackFontSizeSmall: string;
        feedbackFontSizeMedium: string;
        feedbackFontSizeLarge: string;
        labelFontSizeLeftSmall: string;
        labelFontSizeLeftMedium: string;
        labelFontSizeLeftLarge: string;
        labelFontSizeTopSmall: string;
        labelFontSizeTopMedium: string;
        labelFontSizeTopLarge: string;
        labelHeightSmall: string;
        labelHeightMedium: string;
        labelHeightLarge: string;
        labelPaddingVertical: string;
        labelPaddingHorizontal: string;
        labelTextAlignVertical: string;
        labelTextAlignHorizontal: string;
    }, any>>>;
}>>, {
    readonly required: boolean;
    readonly first: boolean;
    readonly showRequireMark: boolean | undefined;
    readonly showFeedback: boolean | undefined;
    readonly showLabel: boolean | undefined;
    readonly ignorePathChange: boolean;
}>;
export default UFormItem;
