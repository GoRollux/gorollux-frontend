import type { InputProps } from 'naive-ui';
import './index.css';
export declare type USearchPropsType = InputProps;
declare const USearch: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    bordered: {
        type: import("vue").PropType<boolean | undefined>;
        default: undefined;
    };
    type: {
        type: import("vue").PropType<"textarea" | "text" | "password">;
        default: string;
    };
    placeholder: import("vue").PropType<string | [string, string]>;
    defaultValue: {
        type: import("vue").PropType<string | [string, string] | null>;
        default: null;
    };
    value: import("vue").PropType<string | [string, string] | null>;
    disabled: {
        type: import("vue").PropType<boolean | undefined>;
        default: undefined;
    };
    size: import("vue").PropType<import("naive-ui/es/input/src/interface").Size>;
    rows: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    round: BooleanConstructor;
    minlength: import("vue").PropType<string | number>;
    maxlength: import("vue").PropType<string | number>;
    clearable: BooleanConstructor;
    autosize: {
        type: import("vue").PropType<boolean | {
            minRows?: number | undefined;
            maxRows?: number | undefined;
        }>;
        default: boolean;
    };
    pair: BooleanConstructor;
    separator: StringConstructor;
    readonly: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    passivelyActivated: BooleanConstructor;
    showPasswordOn: import("vue").PropType<"click" | "mousedown">;
    stateful: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: BooleanConstructor;
    inputProps: import("vue").PropType<import("vue").InputHTMLAttributes | import("vue").TextareaHTMLAttributes>;
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCount: BooleanConstructor;
    loading: {
        type: BooleanConstructor;
        default: undefined;
    };
    allowInput: import("vue").PropType<(value: string) => boolean>;
    renderCount: import("vue").PropType<(props: {
        value: string;
    }) => import("vue").VNodeChild>;
    onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
    onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
    onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
    onInput: import("vue").PropType<import("naive-ui/es/input/src/interface").OnUpdateValue>;
    onFocus: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(e: FocusEvent) => void>>;
    onBlur: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(e: FocusEvent) => void>>;
    onClick: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(e: MouseEvent) => void>>;
    onChange: import("vue").PropType<import("naive-ui/es/input/src/interface").OnUpdateValue>;
    onClear: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(e: MouseEvent) => void>>;
    status: import("vue").PropType<import("naive-ui/es/form/src/interface").FormValidationStatus>;
    'onUpdate:value': import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<import("naive-ui/es/input/src/interface").OnUpdateValue>>;
    onUpdateValue: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<import("naive-ui/es/input/src/interface").OnUpdateValue>>;
    textDecoration: import("vue").PropType<string | [string, string]>;
    attrSize: {
        type: NumberConstructor;
        default: number;
    };
    onInputBlur: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(e: FocusEvent) => void>>;
    onInputFocus: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(e: FocusEvent) => void>>;
    onDeactivate: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<() => void>>;
    onActivate: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<() => void>>;
    onWrapperFocus: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(e: FocusEvent) => void>>;
    onWrapperBlur: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(e: FocusEvent) => void>>;
    internalDeactivateOnEnter: BooleanConstructor;
    internalForceFocus: BooleanConstructor;
    internalLoadingBeforeSuffix: BooleanConstructor;
    showPasswordToggle: BooleanConstructor;
    theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Input", {
        countTextColorDisabled: string;
        countTextColor: string;
        heightTiny: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
        fontSizeTiny: string;
        fontSizeSmall: string;
        fontSizeMedium: string;
        fontSizeLarge: string;
        lineHeight: string;
        lineHeightTextarea: string;
        borderRadius: string;
        iconSize: string;
        groupLabelColor: string;
        groupLabelTextColor: string;
        textColor: string;
        textColorDisabled: string;
        textDecorationColor: string;
        caretColor: string;
        placeholderColor: string;
        placeholderColorDisabled: string;
        color: string;
        colorDisabled: string;
        colorFocus: string;
        groupLabelBorder: string;
        border: string;
        borderHover: string;
        borderDisabled: string;
        borderFocus: string;
        boxShadowFocus: string;
        loadingColor: string;
        loadingColorWarning: string;
        borderWarning: string;
        borderHoverWarning: string;
        colorFocusWarning: string;
        borderFocusWarning: string;
        boxShadowFocusWarning: string;
        caretColorWarning: string;
        loadingColorError: string;
        borderError: string;
        borderHoverError: string;
        colorFocusError: string;
        borderFocusError: string;
        boxShadowFocusError: string;
        caretColorError: string;
        clearColor: string;
        clearColorHover: string;
        clearColorPressed: string;
        iconColor: string;
        iconColorDisabled: string;
        iconColorHover: string;
        iconColorPressed: string;
        suffixTextColor: string;
        paddingTiny: string;
        paddingSmall: string;
        paddingMedium: string;
        paddingLarge: string;
        clearSize: string;
    }, any>>;
    themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Input", {
        countTextColorDisabled: string;
        countTextColor: string;
        heightTiny: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
        fontSizeTiny: string;
        fontSizeSmall: string;
        fontSizeMedium: string;
        fontSizeLarge: string;
        lineHeight: string;
        lineHeightTextarea: string;
        borderRadius: string;
        iconSize: string;
        groupLabelColor: string;
        groupLabelTextColor: string;
        textColor: string;
        textColorDisabled: string;
        textDecorationColor: string;
        caretColor: string;
        placeholderColor: string;
        placeholderColorDisabled: string;
        color: string;
        colorDisabled: string;
        colorFocus: string;
        groupLabelBorder: string;
        border: string;
        borderHover: string;
        borderDisabled: string;
        borderFocus: string;
        boxShadowFocus: string;
        loadingColor: string;
        loadingColorWarning: string;
        borderWarning: string;
        borderHoverWarning: string;
        colorFocusWarning: string;
        borderFocusWarning: string;
        boxShadowFocusWarning: string;
        caretColorWarning: string;
        loadingColorError: string;
        borderError: string;
        borderHoverError: string;
        colorFocusError: string;
        borderFocusError: string;
        boxShadowFocusError: string;
        caretColorError: string;
        clearColor: string;
        clearColorHover: string;
        clearColorPressed: string;
        iconColor: string;
        iconColorDisabled: string;
        iconColorHover: string;
        iconColorPressed: string;
        suffixTextColor: string;
        paddingTiny: string;
        paddingSmall: string;
        paddingMedium: string;
        paddingLarge: string;
        clearSize: string;
    }, any>>>;
    builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Input", {
        countTextColorDisabled: string;
        countTextColor: string;
        heightTiny: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
        fontSizeTiny: string;
        fontSizeSmall: string;
        fontSizeMedium: string;
        fontSizeLarge: string;
        lineHeight: string;
        lineHeightTextarea: string;
        borderRadius: string;
        iconSize: string;
        groupLabelColor: string;
        groupLabelTextColor: string;
        textColor: string;
        textColorDisabled: string;
        textDecorationColor: string;
        caretColor: string;
        placeholderColor: string;
        placeholderColorDisabled: string;
        color: string;
        colorDisabled: string;
        colorFocus: string;
        groupLabelBorder: string;
        border: string;
        borderHover: string;
        borderDisabled: string;
        borderFocus: string;
        boxShadowFocus: string;
        loadingColor: string;
        loadingColorWarning: string;
        borderWarning: string;
        borderHoverWarning: string;
        colorFocusWarning: string;
        borderFocusWarning: string;
        boxShadowFocusWarning: string;
        caretColorWarning: string;
        loadingColorError: string;
        borderError: string;
        borderHoverError: string;
        colorFocusError: string;
        borderFocusError: string;
        boxShadowFocusError: string;
        caretColorError: string;
        clearColor: string;
        clearColorHover: string;
        clearColorPressed: string;
        iconColor: string;
        iconColorDisabled: string;
        iconColorHover: string;
        iconColorPressed: string;
        suffixTextColor: string;
        paddingTiny: string;
        paddingSmall: string;
        paddingMedium: string;
        paddingLarge: string;
        clearSize: string;
    }, any>>>;
}, {
    wrapperElRef: import("vue").Ref<HTMLElement | null>;
    inputElRef: import("vue").Ref<HTMLInputElement | null>;
    inputMirrorElRef: import("vue").Ref<HTMLElement | null>;
    inputEl2Ref: import("vue").Ref<HTMLInputElement | null>;
    textareaElRef: import("vue").Ref<HTMLTextAreaElement | null>;
    textareaMirrorElRef: import("vue").Ref<HTMLElement | null>;
    textareaScrollbarInstRef: import("vue").Ref<{
        $el: HTMLElement;
        containerRef: HTMLElement | null;
        contentRef: HTMLElement | null;
        containerScrollTop: number;
        syncUnifiedContainer: () => void;
        scrollTo: import("naive-ui/es/_internal/scrollbar/src/Scrollbar").ScrollTo;
        scrollBy: import("naive-ui/es/_internal/scrollbar/src/Scrollbar").ScrollBy;
        sync: () => void;
        handleMouseEnterWrapper: () => void;
        handleMouseLeaveWrapper: () => void;
    } | null>;
    rtlEnabled: import("vue").Ref<import("naive-ui/es/config-provider/src/internal-interface").RtlItem | undefined> | undefined;
    uncontrolledValue: import("vue").Ref<string | [string, string] | null>;
    mergedValue: import("vue").ComputedRef<string | [string, string] | null>;
    passwordVisible: import("vue").Ref<boolean>;
    mergedPlaceholder: import("vue").ComputedRef<[string, string] | [string]>;
    showPlaceholder1: import("vue").ComputedRef<string | false>;
    showPlaceholder2: import("vue").ComputedRef<boolean | "" | undefined>;
    mergedFocus: import("vue").ComputedRef<boolean>;
    isComposing: import("vue").Ref<boolean>;
    activated: import("vue").Ref<boolean>;
    showClearButton: import("vue").ComputedRef<boolean>;
    mergedSize: import("vue").ComputedRef<"small" | "tiny" | "medium" | "large">;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    textDecorationStyle: import("vue").ComputedRef<string[] | {
        textDecoration: string;
    }[]>;
    mergedClsPrefix: import("vue").ComputedRef<string>;
    mergedBordered: import("vue").ComputedRef<boolean>;
    mergedShowPasswordOn: import("vue").ComputedRef<"click" | "mousedown" | undefined>;
    placeholderStyle: import("vue").Ref<{
        top: string;
    }>;
    mergedStatus: import("vue").ComputedRef<import("naive-ui/es/form/src/interface").FormValidationStatus | undefined>;
    textAreaScrollContainerWidth: import("vue").Ref<number | undefined>;
    handleTextAreaScroll: (e: Event) => void;
    handleCompositionStart: () => void;
    handleCompositionEnd: (e: CompositionEvent) => void;
    handleInput: (e: Event | CompositionEvent | InputEvent, index?: 0 | 1 | undefined, event?: string | undefined) => void;
    handleInputBlur: (e: FocusEvent) => void;
    handleInputFocus: (e: FocusEvent, index: number) => void;
    handleWrapperBlur: (e: FocusEvent) => void;
    handleWrapperFocus: (e: FocusEvent) => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    handleMouseDown: (e: MouseEvent) => void;
    handleChange: (e: Event, index?: 0 | 1 | undefined) => void;
    handleClick: (e: MouseEvent) => void;
    handleClear: (e: MouseEvent) => void;
    handlePasswordToggleClick: () => void;
    handlePasswordToggleMousedown: (e: MouseEvent) => void;
    handleWrapperKeydown: (e: KeyboardEvent) => void;
    handleTextAreaMirrorResize: () => void;
    getTextareaScrollContainer: () => HTMLTextAreaElement | null;
    mergedTheme: import("vue").ComputedRef<{
        common: {
            baseColor: string;
            primaryColor: string;
            primaryColorHover: string;
            primaryColorPressed: string;
            primaryColorSuppl: string;
            infoColor: string;
            infoColorHover: string;
            infoColorPressed: string;
            infoColorSuppl: string;
            successColor: string;
            successColorHover: string;
            successColorPressed: string;
            successColorSuppl: string;
            warningColor: string;
            warningColorHover: string;
            warningColorPressed: string;
            warningColorSuppl: string;
            errorColor: string;
            errorColorHover: string;
            errorColorPressed: string;
            errorColorSuppl: string;
            textColorBase: string;
            textColor1: string;
            textColor2: string;
            textColor3: string;
            textColorDisabled: string;
            placeholderColor: string;
            placeholderColorDisabled: string;
            iconColor: string;
            iconColorHover: string;
            iconColorPressed: string;
            iconColorDisabled: string;
            opacity1: string;
            opacity2: string;
            opacity3: string;
            opacity4: string;
            opacity5: string;
            dividerColor: string;
            borderColor: string;
            closeIconColor: string;
            closeIconColorHover: string;
            closeIconColorPressed: string;
            closeColorHover: string;
            closeColorPressed: string;
            clearColor: string;
            clearColorHover: string;
            clearColorPressed: string;
            scrollbarColor: string;
            scrollbarColorHover: string;
            scrollbarWidth: string;
            scrollbarHeight: string;
            scrollbarBorderRadius: string;
            progressRailColor: string;
            railColor: string;
            popoverColor: string;
            tableColor: string;
            cardColor: string;
            modalColor: string;
            bodyColor: string;
            tagColor: string;
            avatarColor: string;
            invertedColor: string;
            inputColor: string;
            codeColor: string;
            tabColor: string;
            actionColor: string;
            tableHeaderColor: string;
            hoverColor: string;
            tableColorHover: string;
            tableColorStriped: string;
            pressedColor: string;
            opacityDisabled: string;
            inputColorDisabled: string;
            buttonColor2: string;
            buttonColor2Hover: string;
            buttonColor2Pressed: string;
            boxShadow1: string;
            boxShadow2: string;
            boxShadow3: string;
            fontFamily: string;
            fontFamilyMono: string;
            fontWeight: string;
            fontWeightStrong: string;
            cubicBezierEaseInOut: string;
            cubicBezierEaseOut: string;
            cubicBezierEaseIn: string;
            borderRadius: string;
            borderRadiusSmall: string;
            fontSize: string;
            fontSizeMini: string;
            fontSizeTiny: string;
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            fontSizeHuge: string;
            lineHeight: string;
            heightMini: string;
            heightTiny: string;
            heightSmall: string;
            heightMedium: string;
            heightLarge: string;
            heightHuge: string;
            name: "common";
        };
        self: {
            countTextColorDisabled: string;
            countTextColor: string;
            heightTiny: string;
            heightSmall: string;
            heightMedium: string;
            heightLarge: string;
            fontSizeTiny: string;
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            lineHeight: string;
            lineHeightTextarea: string;
            borderRadius: string;
            iconSize: string;
            groupLabelColor: string;
            groupLabelTextColor: string;
            textColor: string;
            textColorDisabled: string;
            textDecorationColor: string;
            caretColor: string;
            placeholderColor: string;
            placeholderColorDisabled: string;
            color: string;
            colorDisabled: string;
            colorFocus: string;
            groupLabelBorder: string;
            border: string;
            borderHover: string;
            borderDisabled: string;
            borderFocus: string;
            boxShadowFocus: string;
            loadingColor: string;
            loadingColorWarning: string;
            borderWarning: string;
            borderHoverWarning: string;
            colorFocusWarning: string;
            borderFocusWarning: string;
            boxShadowFocusWarning: string;
            caretColorWarning: string;
            loadingColorError: string;
            borderError: string;
            borderHoverError: string;
            colorFocusError: string;
            borderFocusError: string;
            boxShadowFocusError: string;
            caretColorError: string;
            clearColor: string;
            clearColorHover: string;
            clearColorPressed: string;
            iconColor: string;
            iconColorDisabled: string;
            iconColorHover: string;
            iconColorPressed: string;
            suffixTextColor: string;
            paddingTiny: string;
            paddingSmall: string;
            paddingMedium: string;
            paddingLarge: string;
            clearSize: string;
        };
        peers: any;
        peerOverrides: {
            [x: string]: any;
        };
    }>;
    cssVars: import("vue").ComputedRef<{
        '--n-bezier': string;
        '--n-count-text-color': string;
        '--n-count-text-color-disabled': string;
        '--n-color': string;
        '--n-font-size': string;
        '--n-border-radius': string;
        '--n-height': string;
        '--n-padding-left': string;
        '--n-padding-right': string;
        '--n-text-color': string;
        '--n-caret-color': string;
        '--n-text-decoration-color': string;
        '--n-border': string;
        '--n-border-disabled': string;
        '--n-border-hover': string;
        '--n-border-focus': string;
        '--n-placeholder-color': string;
        '--n-placeholder-color-disabled': string;
        '--n-icon-size': string;
        '--n-line-height-textarea': string;
        '--n-color-disabled': string;
        '--n-color-focus': string;
        '--n-text-color-disabled': string;
        '--n-box-shadow-focus': string;
        '--n-loading-color': string;
        '--n-caret-color-warning': string;
        '--n-color-focus-warning': string;
        '--n-box-shadow-focus-warning': string;
        '--n-border-warning': string;
        '--n-border-focus-warning': string;
        '--n-border-hover-warning': string;
        '--n-loading-color-warning': string;
        '--n-caret-color-error': string;
        '--n-color-focus-error': string;
        '--n-box-shadow-focus-error': string;
        '--n-border-error': string;
        '--n-border-focus-error': string;
        '--n-border-hover-error': string;
        '--n-loading-color-error': string;
        '--n-clear-color': string;
        '--n-clear-size': string;
        '--n-clear-color-hover': string;
        '--n-clear-color-pressed': string;
        '--n-icon-color': string;
        '--n-icon-color-hover': string;
        '--n-icon-color-pressed': string;
        '--n-icon-color-disabled': string;
        '--n-suffix-text-color': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
    isCompositing: import("vue").Ref<boolean>;
    blur: () => void;
    focus: () => void;
    select: () => void;
    activate: () => void;
    deactivate: () => void;
    scrollTo: (options: ScrollToOptions) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    bordered: {
        type: import("vue").PropType<boolean | undefined>;
        default: undefined;
    };
    type: {
        type: import("vue").PropType<"textarea" | "text" | "password">;
        default: string;
    };
    placeholder: import("vue").PropType<string | [string, string]>;
    defaultValue: {
        type: import("vue").PropType<string | [string, string] | null>;
        default: null;
    };
    value: import("vue").PropType<string | [string, string] | null>;
    disabled: {
        type: import("vue").PropType<boolean | undefined>;
        default: undefined;
    };
    size: import("vue").PropType<import("naive-ui/es/input/src/interface").Size>;
    rows: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    round: BooleanConstructor;
    minlength: import("vue").PropType<string | number>;
    maxlength: import("vue").PropType<string | number>;
    clearable: BooleanConstructor;
    autosize: {
        type: import("vue").PropType<boolean | {
            minRows?: number | undefined;
            maxRows?: number | undefined;
        }>;
        default: boolean;
    };
    pair: BooleanConstructor;
    separator: StringConstructor;
    readonly: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    passivelyActivated: BooleanConstructor;
    showPasswordOn: import("vue").PropType<"click" | "mousedown">;
    stateful: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: BooleanConstructor;
    inputProps: import("vue").PropType<import("vue").InputHTMLAttributes | import("vue").TextareaHTMLAttributes>;
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCount: BooleanConstructor;
    loading: {
        type: BooleanConstructor;
        default: undefined;
    };
    allowInput: import("vue").PropType<(value: string) => boolean>;
    renderCount: import("vue").PropType<(props: {
        value: string;
    }) => import("vue").VNodeChild>;
    onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
    onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
    onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
    onInput: import("vue").PropType<import("naive-ui/es/input/src/interface").OnUpdateValue>;
    onFocus: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(e: FocusEvent) => void>>;
    onBlur: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(e: FocusEvent) => void>>;
    onClick: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(e: MouseEvent) => void>>;
    onChange: import("vue").PropType<import("naive-ui/es/input/src/interface").OnUpdateValue>;
    onClear: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(e: MouseEvent) => void>>;
    status: import("vue").PropType<import("naive-ui/es/form/src/interface").FormValidationStatus>;
    'onUpdate:value': import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<import("naive-ui/es/input/src/interface").OnUpdateValue>>;
    onUpdateValue: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<import("naive-ui/es/input/src/interface").OnUpdateValue>>;
    textDecoration: import("vue").PropType<string | [string, string]>;
    attrSize: {
        type: NumberConstructor;
        default: number;
    };
    onInputBlur: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(e: FocusEvent) => void>>;
    onInputFocus: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(e: FocusEvent) => void>>;
    onDeactivate: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<() => void>>;
    onActivate: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<() => void>>;
    onWrapperFocus: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(e: FocusEvent) => void>>;
    onWrapperBlur: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(e: FocusEvent) => void>>;
    internalDeactivateOnEnter: BooleanConstructor;
    internalForceFocus: BooleanConstructor;
    internalLoadingBeforeSuffix: BooleanConstructor;
    showPasswordToggle: BooleanConstructor;
    theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Input", {
        countTextColorDisabled: string;
        countTextColor: string;
        heightTiny: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
        fontSizeTiny: string;
        fontSizeSmall: string;
        fontSizeMedium: string;
        fontSizeLarge: string;
        lineHeight: string;
        lineHeightTextarea: string;
        borderRadius: string;
        iconSize: string;
        groupLabelColor: string;
        groupLabelTextColor: string;
        textColor: string;
        textColorDisabled: string;
        textDecorationColor: string;
        caretColor: string;
        placeholderColor: string;
        placeholderColorDisabled: string;
        color: string;
        colorDisabled: string;
        colorFocus: string;
        groupLabelBorder: string;
        border: string;
        borderHover: string;
        borderDisabled: string;
        borderFocus: string;
        boxShadowFocus: string;
        loadingColor: string;
        loadingColorWarning: string;
        borderWarning: string;
        borderHoverWarning: string;
        colorFocusWarning: string;
        borderFocusWarning: string;
        boxShadowFocusWarning: string;
        caretColorWarning: string;
        loadingColorError: string;
        borderError: string;
        borderHoverError: string;
        colorFocusError: string;
        borderFocusError: string;
        boxShadowFocusError: string;
        caretColorError: string;
        clearColor: string;
        clearColorHover: string;
        clearColorPressed: string;
        iconColor: string;
        iconColorDisabled: string;
        iconColorHover: string;
        iconColorPressed: string;
        suffixTextColor: string;
        paddingTiny: string;
        paddingSmall: string;
        paddingMedium: string;
        paddingLarge: string;
        clearSize: string;
    }, any>>;
    themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Input", {
        countTextColorDisabled: string;
        countTextColor: string;
        heightTiny: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
        fontSizeTiny: string;
        fontSizeSmall: string;
        fontSizeMedium: string;
        fontSizeLarge: string;
        lineHeight: string;
        lineHeightTextarea: string;
        borderRadius: string;
        iconSize: string;
        groupLabelColor: string;
        groupLabelTextColor: string;
        textColor: string;
        textColorDisabled: string;
        textDecorationColor: string;
        caretColor: string;
        placeholderColor: string;
        placeholderColorDisabled: string;
        color: string;
        colorDisabled: string;
        colorFocus: string;
        groupLabelBorder: string;
        border: string;
        borderHover: string;
        borderDisabled: string;
        borderFocus: string;
        boxShadowFocus: string;
        loadingColor: string;
        loadingColorWarning: string;
        borderWarning: string;
        borderHoverWarning: string;
        colorFocusWarning: string;
        borderFocusWarning: string;
        boxShadowFocusWarning: string;
        caretColorWarning: string;
        loadingColorError: string;
        borderError: string;
        borderHoverError: string;
        colorFocusError: string;
        borderFocusError: string;
        boxShadowFocusError: string;
        caretColorError: string;
        clearColor: string;
        clearColorHover: string;
        clearColorPressed: string;
        iconColor: string;
        iconColorDisabled: string;
        iconColorHover: string;
        iconColorPressed: string;
        suffixTextColor: string;
        paddingTiny: string;
        paddingSmall: string;
        paddingMedium: string;
        paddingLarge: string;
        clearSize: string;
    }, any>>>;
    builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Input", {
        countTextColorDisabled: string;
        countTextColor: string;
        heightTiny: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
        fontSizeTiny: string;
        fontSizeSmall: string;
        fontSizeMedium: string;
        fontSizeLarge: string;
        lineHeight: string;
        lineHeightTextarea: string;
        borderRadius: string;
        iconSize: string;
        groupLabelColor: string;
        groupLabelTextColor: string;
        textColor: string;
        textColorDisabled: string;
        textDecorationColor: string;
        caretColor: string;
        placeholderColor: string;
        placeholderColorDisabled: string;
        color: string;
        colorDisabled: string;
        colorFocus: string;
        groupLabelBorder: string;
        border: string;
        borderHover: string;
        borderDisabled: string;
        borderFocus: string;
        boxShadowFocus: string;
        loadingColor: string;
        loadingColorWarning: string;
        borderWarning: string;
        borderHoverWarning: string;
        colorFocusWarning: string;
        borderFocusWarning: string;
        boxShadowFocusWarning: string;
        caretColorWarning: string;
        loadingColorError: string;
        borderError: string;
        borderHoverError: string;
        colorFocusError: string;
        borderFocusError: string;
        boxShadowFocusError: string;
        caretColorError: string;
        clearColor: string;
        clearColorHover: string;
        clearColorPressed: string;
        iconColor: string;
        iconColorDisabled: string;
        iconColorHover: string;
        iconColorPressed: string;
        suffixTextColor: string;
        paddingTiny: string;
        paddingSmall: string;
        paddingMedium: string;
        paddingLarge: string;
        clearSize: string;
    }, any>>>;
}>>, {
    type: "textarea" | "text" | "password";
    readonly: string | boolean;
    round: boolean;
    disabled: boolean | undefined;
    autofocus: boolean;
    autosize: boolean | {
        minRows?: number | undefined;
        maxRows?: number | undefined;
    };
    loading: boolean;
    bordered: boolean | undefined;
    clearable: boolean;
    defaultValue: string | [string, string] | null;
    resizable: boolean;
    pair: boolean;
    rows: string | number;
    passivelyActivated: boolean;
    stateful: boolean;
    showCount: boolean;
    attrSize: number;
    internalDeactivateOnEnter: boolean;
    internalForceFocus: boolean;
    internalLoadingBeforeSuffix: boolean;
    showPasswordToggle: boolean;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default USearch;
