interface SidemenuLink {
  children: React.ReactNode;
}
const SidemenuLink = ({ children }: SidemenuLink) => {
  return (
    <li>
      <div>
        <span>Icon</span> <a href='#'>{children}</a>
      </div>
    </li>
  );
};

export default SidemenuLink;
