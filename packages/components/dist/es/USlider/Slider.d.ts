import type { SliderProps } from 'naive-ui';
export declare type USliderPropsType = SliderProps;
declare const USlider: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    readonly to: {
        type: import("vue").PropType<string | boolean | HTMLElement>;
        default: undefined;
    };
    readonly defaultValue: {
        readonly type: import("vue").PropType<number | number[]>;
        readonly default: 0;
    };
    readonly marks: import("vue").PropType<Record<string, string>>;
    readonly disabled: {
        readonly type: import("vue").PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly formatTooltip: import("vue").PropType<(value: number) => string | number>;
    readonly keyboard: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly step: {
        readonly type: import("vue").PropType<number | "mark">;
        readonly default: 1;
    };
    readonly range: BooleanConstructor;
    readonly value: import("vue").PropType<number | number[]>;
    readonly placement: import("vue").PropType<import("naive-ui").PopoverPlacement>;
    readonly showTooltip: {
        readonly type: import("vue").PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly tooltip: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly vertical: BooleanConstructor;
    readonly reverse: BooleanConstructor;
    readonly 'onUpdate:value': import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(value: number & number[]) => void>>;
    readonly onUpdateValue: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(value: number & number[]) => void>>;
    readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Slider", {
        fontSize: string;
        railColor: string;
        railColorHover: string;
        fillColor: string;
        fillColorHover: string;
        opacityDisabled: string;
        handleColor: string;
        dotColor: string;
        dotColorModal: string;
        dotColorPopover: string;
        handleBoxShadow: string;
        handleBoxShadowHover: string;
        handleBoxShadowActive: string;
        handleBoxShadowFocus: string;
        indicatorColor: string;
        indicatorBoxShadow: string;
        indicatorTextColor: string;
        indicatorBorderRadius: string;
        dotBorder: string;
        dotBorderActive: string;
        dotBoxShadow: string;
        railHeight: string;
        railWidthVertical: string;
        handleSize: string;
        dotHeight: string;
        dotWidth: string;
        dotBorderRadius: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Slider", {
        fontSize: string;
        railColor: string;
        railColorHover: string;
        fillColor: string;
        fillColorHover: string;
        opacityDisabled: string;
        handleColor: string;
        dotColor: string;
        dotColorModal: string;
        dotColorPopover: string;
        handleBoxShadow: string;
        handleBoxShadowHover: string;
        handleBoxShadowActive: string;
        handleBoxShadowFocus: string;
        indicatorColor: string;
        indicatorBoxShadow: string;
        indicatorTextColor: string;
        indicatorBorderRadius: string;
        dotBorder: string;
        dotBorderActive: string;
        dotBoxShadow: string;
        railHeight: string;
        railWidthVertical: string;
        handleSize: string;
        dotHeight: string;
        dotWidth: string;
        dotBorderRadius: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Slider", {
        fontSize: string;
        railColor: string;
        railColorHover: string;
        fillColor: string;
        fillColorHover: string;
        opacityDisabled: string;
        handleColor: string;
        dotColor: string;
        dotColorModal: string;
        dotColorPopover: string;
        handleBoxShadow: string;
        handleBoxShadowHover: string;
        handleBoxShadowActive: string;
        handleBoxShadowFocus: string;
        indicatorColor: string;
        indicatorBoxShadow: string;
        indicatorTextColor: string;
        indicatorBorderRadius: string;
        dotBorder: string;
        dotBorderActive: string;
        dotBoxShadow: string;
        railHeight: string;
        railWidthVertical: string;
        handleSize: string;
        dotHeight: string;
        dotWidth: string;
        dotBorderRadius: string;
    }, any>>>;
}, {
    mergedClsPrefix: import("vue").ComputedRef<string>;
    namespace: import("vue").ComputedRef<string | undefined>;
    uncontrolledValue: import("vue").Ref<number | number[]>;
    mergedValue: import("vue").ComputedRef<number | number[]>;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    mergedPlacement: import("vue").ComputedRef<import("naive-ui").PopoverPlacement>;
    isMounted: Readonly<import("vue").Ref<boolean>>;
    adjustedTo: import("vue").ComputedRef<string | HTMLElement>;
    dotTransitionDisabled: import("vue").Ref<boolean>;
    markInfos: import("vue").ComputedRef<{
        active: boolean;
        label: string;
        style: import("vue").CSSProperties;
    }[]>;
    isShowTooltip: (index: number) => boolean;
    shouldKeepTooltipTransition: (index: number) => boolean;
    handleRailRef: import("vue").Ref<HTMLElement | null>;
    setHandleRefs: (key: number) => (el: any) => void;
    setFollowerRefs: (key: number) => (el: any) => void;
    fillStyle: import("vue").ComputedRef<{
        [x: string]: string;
        height: string;
        width?: undefined;
    } | {
        [x: string]: string;
        width: string;
        height?: undefined;
    } | undefined>;
    getHandleStyle: (value: number, index: number) => Record<string, any>;
    activeIndex: import("vue").Ref<number>;
    arrifiedValues: import("vue").ComputedRef<number[]>;
    followerEnabledIndexSet: import("vue").Ref<Set<number>>;
    handleRailMouseDown: (event: MouseEvent | TouchEvent) => void;
    handleHandleFocus: (index: number) => void;
    handleHandleBlur: (index: number) => void;
    handleHandleMouseEnter: (index: number) => void;
    handleHandleMouseLeave: (index: number) => void;
    handleRailKeyDown: (e: KeyboardEvent) => void;
    indicatorCssVars: import("vue").ComputedRef<{
        '--n-font-size': string;
        '--n-indicator-border-radius': string;
        '--n-indicator-box-shadow': string;
        '--n-indicator-color': string;
        '--n-indicator-text-color': string;
    }> | undefined;
    indicatorThemeClass: import("vue").Ref<string> | undefined;
    indicatorOnRender: (() => void) | undefined;
    cssVars: import("vue").ComputedRef<{
        '--n-bezier': string;
        '--n-dot-border': string;
        '--n-dot-border-active': string;
        '--n-dot-border-radius': string;
        '--n-dot-box-shadow': string;
        '--n-dot-color': string;
        '--n-dot-color-modal': string;
        '--n-dot-color-popover': string;
        '--n-dot-height': string;
        '--n-dot-width': string;
        '--n-fill-color': string;
        '--n-fill-color-hover': string;
        '--n-font-size': string;
        '--n-handle-box-shadow': string;
        '--n-handle-box-shadow-active': string;
        '--n-handle-box-shadow-focus': string;
        '--n-handle-box-shadow-hover': string;
        '--n-handle-color': string;
        '--n-handle-size': string;
        '--n-opacity-disabled': string;
        '--n-rail-color': string;
        '--n-rail-color-hover': string;
        '--n-rail-height': string;
        '--n-rail-width-vertical': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly to: {
        type: import("vue").PropType<string | boolean | HTMLElement>;
        default: undefined;
    };
    readonly defaultValue: {
        readonly type: import("vue").PropType<number | number[]>;
        readonly default: 0;
    };
    readonly marks: import("vue").PropType<Record<string, string>>;
    readonly disabled: {
        readonly type: import("vue").PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly formatTooltip: import("vue").PropType<(value: number) => string | number>;
    readonly keyboard: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly step: {
        readonly type: import("vue").PropType<number | "mark">;
        readonly default: 1;
    };
    readonly range: BooleanConstructor;
    readonly value: import("vue").PropType<number | number[]>;
    readonly placement: import("vue").PropType<import("naive-ui").PopoverPlacement>;
    readonly showTooltip: {
        readonly type: import("vue").PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly tooltip: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly vertical: BooleanConstructor;
    readonly reverse: BooleanConstructor;
    readonly 'onUpdate:value': import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(value: number & number[]) => void>>;
    readonly onUpdateValue: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(value: number & number[]) => void>>;
    readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Slider", {
        fontSize: string;
        railColor: string;
        railColorHover: string;
        fillColor: string;
        fillColorHover: string;
        opacityDisabled: string;
        handleColor: string;
        dotColor: string;
        dotColorModal: string;
        dotColorPopover: string;
        handleBoxShadow: string;
        handleBoxShadowHover: string;
        handleBoxShadowActive: string;
        handleBoxShadowFocus: string;
        indicatorColor: string;
        indicatorBoxShadow: string;
        indicatorTextColor: string;
        indicatorBorderRadius: string;
        dotBorder: string;
        dotBorderActive: string;
        dotBoxShadow: string;
        railHeight: string;
        railWidthVertical: string;
        handleSize: string;
        dotHeight: string;
        dotWidth: string;
        dotBorderRadius: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Slider", {
        fontSize: string;
        railColor: string;
        railColorHover: string;
        fillColor: string;
        fillColorHover: string;
        opacityDisabled: string;
        handleColor: string;
        dotColor: string;
        dotColorModal: string;
        dotColorPopover: string;
        handleBoxShadow: string;
        handleBoxShadowHover: string;
        handleBoxShadowActive: string;
        handleBoxShadowFocus: string;
        indicatorColor: string;
        indicatorBoxShadow: string;
        indicatorTextColor: string;
        indicatorBorderRadius: string;
        dotBorder: string;
        dotBorderActive: string;
        dotBoxShadow: string;
        railHeight: string;
        railWidthVertical: string;
        handleSize: string;
        dotHeight: string;
        dotWidth: string;
        dotBorderRadius: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Slider", {
        fontSize: string;
        railColor: string;
        railColorHover: string;
        fillColor: string;
        fillColorHover: string;
        opacityDisabled: string;
        handleColor: string;
        dotColor: string;
        dotColorModal: string;
        dotColorPopover: string;
        handleBoxShadow: string;
        handleBoxShadowHover: string;
        handleBoxShadowActive: string;
        handleBoxShadowFocus: string;
        indicatorColor: string;
        indicatorBoxShadow: string;
        indicatorTextColor: string;
        indicatorBorderRadius: string;
        dotBorder: string;
        dotBorderActive: string;
        dotBoxShadow: string;
        railHeight: string;
        railWidthVertical: string;
        handleSize: string;
        dotHeight: string;
        dotWidth: string;
        dotBorderRadius: string;
    }, any>>>;
}>>, {
    readonly range: boolean;
    readonly reverse: boolean;
    readonly vertical: boolean;
    readonly tooltip: boolean;
    readonly disabled: boolean | undefined;
    readonly step: number | "mark";
    readonly max: number;
    readonly min: number;
    readonly to: string | boolean | HTMLElement;
    readonly defaultValue: number | number[];
    readonly keyboard: boolean;
    readonly showTooltip: boolean | undefined;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default USlider;