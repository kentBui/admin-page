interface WidgetButtonProps {
  type: string;
}
const WidgetButton: React.FC<WidgetButtonProps> = ({ type }) => {
  return (
    <button className={`widgetLg-btn widgetLg-btn-${type}`}>{type}</button>
  );
};

export default WidgetButton;
