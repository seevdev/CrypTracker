interface SidemenuLink {
  children: React.ReactNode;
}

//TODO: find way to pass svg icon through props

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
