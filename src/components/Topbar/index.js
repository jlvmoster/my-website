const links = [
  { name: 'About Me', href: '#about-me' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact Me', href: '#contact-me' },
  { name: 'My Blog', href: 'https://blog.moster.io', isBlank: true },
];

const Topbar = ({ title }) => (
  <div className='max-w-3xl mx-auto py-6 flex flex-col items-center'>
    <h1 className='text-3xl sm:text-5xl font-bold text-slate-200'>{title}</h1>
    <div className='py-6 flex flex-row flex-wrap gap-x-6'>
      {links.map(link => (
        <a
          key={link.name}
          href={link.href}
          target={link?.isBlank && '_blank'}
          className='text-lg sm:text-2xl text-slate-200 font-light hover:underline'>
          {link.name}
        </a>
      ))}
    </div>
  </div>
);

export default Topbar;
