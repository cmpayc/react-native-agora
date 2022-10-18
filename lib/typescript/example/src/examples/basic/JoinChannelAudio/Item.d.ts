interface ItemProps {
    title: string;
    disabled?: boolean;
    btnOnPress?: any;
    onSliderValueChange?: (value: number) => void;
    onSwitchValueChange?: (value: boolean) => void;
    isShowSlider?: boolean;
    isShowSwitch?: boolean;
    titleColor?: string;
}
declare const Item: ({ title, disabled, btnOnPress, onSliderValueChange, onSwitchValueChange, isShowSlider, isShowSwitch, titleColor, }: ItemProps) => JSX.Element;
export default Item;
