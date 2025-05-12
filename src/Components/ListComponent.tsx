
const ListComponent = ({ items, renderItem }) => {
  if (!items || items.length === 0) {
    return <div>No items found.</div>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.id || index}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
