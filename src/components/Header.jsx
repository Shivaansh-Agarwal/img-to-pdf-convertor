export const Header = ({ title, height }) => {
  return (
    <header className="p-4 text-4xl font-semibold" style={{ height }}>
      {title}
    </header>
  );
};
